import { FC, PropsWithChildren } from 'react';

const Indivisible: FC<PropsWithChildren<unknown>> = ({ children }) => <span className="indivisible">{children}</span>;

export default Indivisible;
