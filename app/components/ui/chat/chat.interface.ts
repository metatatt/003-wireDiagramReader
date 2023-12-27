export interface MessageContentDetail {
  type: "text" | "image_url";
  text?: string;
  image_url?: { url: string };
  role?: "user" | "assistant";
}

export interface RawMessage {
  id: string;
  content: string;
  role: string;
}

export interface Message {
  id: string;
  role: string;
  content: MessageContentDetail[];
}

type InputChangeEvent = React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>;


export interface ChatHandler {
  
  messages: Message[];
  input: string;
  isLoading: boolean;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    ops?: {
      data?: any;
    },
  ) => void;
  handleInputChange: (e: any) => void;
  reload?: () => void;
  stop?: () => void;
  onFileUpload?: (file: File) => Promise<void>;
  onFileError?: (errMsg: string) => void;
}
