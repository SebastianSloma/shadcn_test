import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import DrawerShadcn from '@/components/DrawerShadcn';
import { ToastWithAction } from '@/components/ToastWithAction';
import { Acordion } from '@/components/Acordion';

const page = () => {
	return (
		<div>
			<h1>Button Page</h1>
			<Button variant='ghost'>Click me</Button>
			<Button variant='destructive'>Click me</Button>
			<Calendar mode='single' className='rounded-md border' />
			<DrawerShadcn />
			<div>
				<ToastWithAction />
			</div>
			<div>
				<Acordion />
			</div>
		</div>
	);
};

export default page;
