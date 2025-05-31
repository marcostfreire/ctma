"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { supabase } from '@/app/lib/supabaseClient'; // Caminho corrigido
import Image from 'next/image'; // Import the Image component
import ReactMarkdown from 'react-markdown'; // Import ReactMarkdown

interface PostPageParams extends Record<string, string | string[]> {
  slug: string;
}

interface BlogPost {
  id: string;
  title: string;
  content: string;
  category: string;
  author_name: string;
  created_at: string;
  image_url?: string;
  read_time?: number;
}

export default function PostPage() {
  const params = useParams() as PostPageParams;
  const { slug } = params;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data, error: supabaseError } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('slug', slug)
          .single();

        if (supabaseError) {
          throw supabaseError;
        }

        if (data) {
          setPost(data as BlogPost);
        } else {
          setError('Post não encontrado.');
        }
      } catch (rawError: unknown) { // Corrigido para unknown
        let errorMessage = 'Falha ao carregar o post.';
        if (typeof rawError === 'object' && rawError !== null) {
          const errorAsObject = rawError as { message?: string };
          if (errorAsObject.message) {
            errorMessage = errorAsObject.message;
          }
        }
        console.error("Erro ao buscar o post:", rawError);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <span className="text-gray-500 text-lg">Carregando post...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <span className="text-red-600 text-lg">{error}</span>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <span className="text-gray-500 text-lg">Post não encontrado.</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <article className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        {post.image_url && (
          <div className="mb-8 relative w-full h-96"> {/* Added relative positioning for Image fill */}
            <Image
              src={post.image_url}
              alt={post.title}
              layout="fill" // Use layout="fill" for responsive images that fill the container
              objectFit="cover" // Ensure the image covers the area without distortion
              className="rounded-lg"
            />
          </div>
        )}
        <div className="p-8">
          <div className="mb-6">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mr-2">
              {post.category}
            </span>
            <span className="text-gray-500 text-sm">
              {new Date(post.created_at).toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            {post.read_time && (
              <span className="text-gray-500 text-sm ml-2">
                · {post.read_time} min de leitura
              </span>
            )}
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{post.title}</h1>
          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
            {post.author_avatar_url && (
              <Image
                src={post.author_avatar_url}
                alt={post.author_name || 'Author'}
                width={40}
                height={40}
                className="rounded-full mr-3"
              />
            )}
            <span>Por {post.author_name || 'Autor Desconhecido'}</span>
            <span className="mx-2">•</span>
            <span>{new Date(post.created_at).toLocaleDateString()}</span>
          </div>
          {/* Use ReactMarkdown to render content and apply prose styles */}
          <article className="prose dark:prose-invert lg:prose-xl max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </article>

          <div className="mt-8">
            {/* You might want to add some post-interaction components here */}
          </div>
        </div>
      </article>
    </div>
  );
}
