type Result = {
    pageid: string;
    title: string;
    extract: string;
    thumbnail?: {
      source: string;
      width: number;
      height: number;
    };
  };
  
  type SearchResult = {
    query?: {
      pages?: Record<string, Result>; // Map-like structure returned by the API
    };
  };
  