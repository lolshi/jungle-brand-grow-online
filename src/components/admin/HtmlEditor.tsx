
import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Eye, Code } from 'lucide-react';

interface HtmlEditorProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  rows?: number;
}

const HtmlEditor = ({ value, onChange, label, placeholder, rows = 6 }: HtmlEditorProps) => {
  const [activeTab, setActiveTab] = useState('editor');

  const insertHtml = (htmlTag: string) => {
    const textarea = document.getElementById('html-editor') as HTMLTextAreaElement;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = value.substring(start, end);
      
      let newText = '';
      switch (htmlTag) {
        case 'bold':
          newText = `<strong>${selectedText || 'Bold text'}</strong>`;
          break;
        case 'italic':
          newText = `<em>${selectedText || 'Italic text'}</em>`;
          break;
        case 'heading':
          newText = `<h2>${selectedText || 'Heading'}</h2>`;
          break;
        case 'paragraph':
          newText = `<p>${selectedText || 'Paragraph text'}</p>`;
          break;
        case 'link':
          newText = `<a href="https://example.com">${selectedText || 'Link text'}</a>`;
          break;
        case 'image':
          newText = `<img src="https://example.com/image.jpg" alt="${selectedText || 'Image description'}" />`;
          break;
        case 'list':
          newText = `<ul>\n  <li>${selectedText || 'List item 1'}</li>\n  <li>List item 2</li>\n</ul>`;
          break;
        case 'code':
          newText = `<code>${selectedText || 'Code snippet'}</code>`;
          break;
        case 'blockquote':
          newText = `<blockquote>${selectedText || 'Quote text'}</blockquote>`;
          break;
        default:
          newText = selectedText;
      }
      
      const newValue = value.substring(0, start) + newText + value.substring(end);
      onChange(newValue);
      
      // Focus back to textarea
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start + newText.length, start + newText.length);
      }, 0);
    }
  };

  return (
    <div className="space-y-3">
      {label && <Label>{label}</Label>}
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="editor" className="flex items-center gap-2">
            <Code className="h-4 w-4" />
            HTML Editor
          </TabsTrigger>
          <TabsTrigger value="preview" className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            Preview
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="editor" className="space-y-3">
          {/* HTML Toolbar */}
          <div className="flex flex-wrap gap-2 p-3 bg-gray-50 rounded-md border">
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => insertHtml('bold')}
              className="text-xs"
            >
              <strong>B</strong>
            </Button>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => insertHtml('italic')}
              className="text-xs"
            >
              <em>I</em>
            </Button>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => insertHtml('heading')}
              className="text-xs"
            >
              H2
            </Button>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => insertHtml('paragraph')}
              className="text-xs"
            >
              P
            </Button>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => insertHtml('link')}
              className="text-xs"
            >
              Link
            </Button>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => insertHtml('image')}
              className="text-xs"
            >
              Img
            </Button>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => insertHtml('list')}
              className="text-xs"
            >
              List
            </Button>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => insertHtml('code')}
              className="text-xs"
            >
              Code
            </Button>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => insertHtml('blockquote')}
              className="text-xs"
            >
              Quote
            </Button>
          </div>
          
          <Textarea
            id="html-editor"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder || 'Enter HTML content...'}
            rows={rows}
            className="font-mono text-sm"
          />
        </TabsContent>
        
        <TabsContent value="preview">
          <div className="min-h-[200px] p-4 border rounded-md bg-white">
            <div 
              dangerouslySetInnerHTML={{ __html: value || '<p>No content to preview</p>' }}
              className="prose prose-sm max-w-none"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HtmlEditor;
