import { cn } from "@/lib/utils";

const EthersJSIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2.25L4.5 6.41731L12 10.5846L19.5 6.41731L12 2.25Z"
        fill="currentColor"
      />
      <path
        d="M12 21.75L4.5 17.5827V9.24807L12 13.4154L19.5 9.24807V17.5827L12 21.75Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default EthersJSIcon;