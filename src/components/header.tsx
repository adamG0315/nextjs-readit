import Link from 'next/link';
import React, { Suspense } from 'react';
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from "@nextui-org/react"
import HeaderAuth from './header-auth';
import SearchInput from './search-input';

interface Props {
}

const Header: React.FC<Props> = ({ }) => {	
	return (
		<div>
			<Navbar className='shadow mb-6'>
				<NavbarBrand>
					<Link className='font-bold' href="/">Discuss</Link>
				</NavbarBrand>
				<NavbarContent justify='center'>
					<NavbarItem>
						<Suspense>
							<SearchInput/>
						</Suspense>
					</NavbarItem>
				</NavbarContent>
				<NavbarContent justify='end'>
					<HeaderAuth/>
				</NavbarContent>
			</Navbar>
		</div>
	);
};

export default Header;