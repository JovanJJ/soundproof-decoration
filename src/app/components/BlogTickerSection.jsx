import Link from "next/link";
import InfiniteScrollTicker from "./ui/InfiniteScrollTicker";
import { RevealUp } from "./ui/MotionWrappers";

export default function BlogTickerSection({ posts }) {
    return (
        <>
            <h2 className="text-center text-xl lg:text-2xl text-gray-700">
                You can read and find more examples on <Link href="/blog" className="underline text-gray-700">blog page</Link>
            </h2>

            <RevealUp>
                <InfiniteScrollTicker posts={posts} />
            </RevealUp>
        </>
    );
}
