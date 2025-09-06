import {cn} from '@/lib/utils';

type FrameProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Frame({children, className}: FrameProps) {
  return (
    <>
      {/* <Image src='/imgs/bbburst.svg' alt='Description of the image' height={1000} width={1000} /> */}
      <div className={cn('', className)}>{children}</div>
    </>
  );
}
