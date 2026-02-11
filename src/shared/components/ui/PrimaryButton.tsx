export const MainCTA = ({ url, text }: { url: string; text: string }) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-xana-blue text-white font-bold text-[20px] py-4 rounded-full shadow-xl transition-all hover:bg-blue-700 active:scale-95 w-full md:w-auto md:px-14 text-center inline-block">
            {text}
        </a>
    );
};