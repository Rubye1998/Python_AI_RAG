import Markdown from 'markdown-to-jsx'

interface MessageProps {
  message: {
    role: string;
    content: string;
  };
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const containerClass = message.role === 'user' ? 'bg-[#e7e7e9] text-[##FAFAFA]' : 'bg-[#F8F8F8] text-[#43403B]';
  const roleText = message.role === 'user' ? 'Question' : 'DegreeGuru';

  return (
    <div className={`p-2 px-5 border-b ${containerClass}`}>
      <div>
        <Markdown>
          {`**${roleText}:** ${message.content}`}
        </Markdown>
      </div>
    </div>
  );
};

export default Message;
