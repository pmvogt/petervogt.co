import Link from 'next/link';

const WorkItem = ({ workPost }) => {
  return (
    <div
      className='flex-col p-4 bg-cover rounded shadow-lg cursor-pointer h-108 hover:scale-105 hover:rounded-l drop-shadow-lg text-eggshell-50'
      style={{ backgroundImage: `url(${workPost.data.bg}` }}
    >
      <h3 className='font-serif font-normal text-4 sm:text-4 lg:text-5 xl:text-7 tracking-0 leading-0'>
        <Link href={`/work/${workPost.slug}`}>{workPost.data.title}</Link>
      </h3>
    </div>
  );
};

export default WorkItem;
