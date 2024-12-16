import react from 'react';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { File } from 'buffer';

type NewsItem = {
  id: number;
  title: string;
  content: string;
  image: string;
};

export default async function NewsListPage() {
  // JSON 파일 읽기
  const filePath = path.join(process.cwd(), 'public/data', 'news.json');
  const fileData = fs.readFileSync(filePath, 'utf8');
  const news: NewsItem[] = JSON.parse(fileData);

  return (
    <div>
      <h1>뉴스 목록</h1>
      <ul>
        {news.map((item) => (
          <li key={item.id} style={{ marginBottom: '20px' }}>
            <Link href={`/news/${item.id}`}>
              <h2>{item.title}</h2>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
