'use client'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

export default function Page() {
  const { id } = useParams();  // Get the dynamic ID from the URL
  const [post, setPost] = useState(null);  // Initialize as null for better type handling
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data from API...");
        const response = await fetch('https://api.vercel.app/blog');
        
        // Check if response status is OK before parsing
        if (!response.ok) {
          console.error('API response was not OK:', response.status, response.statusText);
          throw new Error('Failed to fetch: ' + response.statusText);
        }

        console.log('Response:', response);  // Log response to the console
        
        const posts = await response.json();
        console.log('Posts:', posts);  // Log posts data
        
        if (!Array.isArray(posts)) {
          throw new Error('Invalid response structure');
        }

        const foundPost = posts.find((post: any) => post.id === Number(id));  // Ensure proper type comparison
        if (!foundPost) {
          throw new Error('Post not found');
        }

        setPost(foundPost);

      } catch (err) {
        console.error("Error during fetch:", err);
        setError(err.message || 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);  // The effect will rerun if the id changes

  if (loading) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Error: {error}</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>id: {post.id}</h1>
      <h1>title: {post.title}</h1>
      <h1>content: {post.content}</h1>
      <h1>author: {post.author}</h1>
      <h1>date: {post.date}</h1>
      <h1>category: {post.category}</h1>
    </div>
  );
}
