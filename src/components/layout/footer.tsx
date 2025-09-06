import {cn} from '@/lib/utils';

type FooterProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Footer({children, className}: FooterProps) {
  return (
    <footer>
      {/* 
        Origianl class name: flex flex-col p-2 text-[0.65rem] gap-y-0
      */}
      <div className={cn('', className)}>{children}</div>
    </footer>
  );
}
