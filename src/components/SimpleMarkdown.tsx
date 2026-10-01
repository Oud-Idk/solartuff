import MarkdownRenderer from './MarkdownRenderer';

interface SimpleMarkdownProps {
  content: string;
}

export default function SimpleMarkdown({ content }: SimpleMarkdownProps) {
  return <MarkdownRenderer content={content} />;
}
