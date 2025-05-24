import { Button } from "@/components/ui/button";

export default function IntroJoinBusiness() {
	return (
		<div className='w-dvw h-full m-40 flex justify-center items-center lg:space-x-24 space-x-8 md:p-20 lg:p-40 p-10 md:flex-row flex-col space-y-8'>
			<img src="/img/DummyImage.png" className="xl:size-100 size-75 object-cover rounded-2xl"></img>
			<div className="w-full h-full space-y-8">
				<h3 className="xl:text-3xl text-xl text-teal-700">For individuals and salons</h3>
				<h2 className="xl:text-6xl text-4xl font-bold">Own a personal business or a side-hustle?</h2>
				<p className="text-base">Experience all the advantages of a modern beauty platform. Organize your daily work and find new clients. And you can also manage your business in one program and receive and clear reports on your work. </p>
				<Button className="bg-teal-950 h-12" onClick={() => {
					window.location.href = '/login';
				}}>Join now</Button>
			</div>
		</div>
	)
}
