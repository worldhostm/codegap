import fs from 'fs';
import path from 'path';
import DynamicTable from './DynamicTable';

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

  const headers = ['id','title', 'createdAt'];
// const data = [
//   { Name: 'John Doe', Age: 28, City: 'New York' },
//   { Name: 'Jane Smith', Age: 34, City: 'Los Angeles' },
//   { Name: 'Sam Wilson', Age: 23, City: 'Chicago' },
// ];


  return (
        <DynamicTable headers={headers} data={news} />
  );
}
