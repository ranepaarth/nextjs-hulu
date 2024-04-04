import React, {
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
  SVGProps,
} from 'react';

function HeaderItem({
  title,
  Icon,
}: {
  title: String;
  Icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
}) {
  return (
    <div className='group flex w-12 sm:w-20 cursor-pointer flex-col items-center space-y-2 text-neutral-300 transition-colors duration-100 ease-linear hover:text-neutral-200'>
      <span>
        <Icon className='w-7 stroke-2 duration-200 group-hover:animate-bounce sm:w-6' />
      </span>
      <span className='text-xs font-medium tracking-widest opacity-0 group-hover:opacity-100'>
        {title}
      </span>
    </div>
  );
}

export default HeaderItem;
