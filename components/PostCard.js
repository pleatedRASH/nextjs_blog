import Link from 'next/link';

function PostCard({ title, date, description, slug }) {
    return (
        <div className="my-4 py-4 border-b">
            <h2 className="font-bold text-2xl my-4">{title}</h2>
            <time className="text-gray-500">{date}</time>
            <p className="mt-4 italic">{description}</p>


            <Link href="/[slug]" as={`/${slug}`}>
                <a className="text-indigo-800 mt-4 mb-2 block">Fuck, jerk, and CUM more.</a>
            </Link>
        </div>
    );
}

export default PostCard;