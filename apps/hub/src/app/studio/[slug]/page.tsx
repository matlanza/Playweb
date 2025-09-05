import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Editor from './editor';

export async function generateStaticParams() {
  const pluginsDir = path.join(process.cwd(), 'public', 'plugins');
  if (!fs.existsSync(pluginsDir)) return [];
  return fs.readdirSync(pluginsDir).map(slug => ({ slug }));
}

export default async function StudioPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'public', 'plugins', params.slug, 'index.html');
  if (!fs.existsSync(filePath)) {
    notFound();
  }
  const content = await fs.promises.readFile(filePath, 'utf8');
  return <Editor initial={content} />;
}
