import Header from "@/components/commons/Header.tsx";


export default function Home() {
    return (
        <div className={"w-full h-full min-h-screen p-5 bg-background-prime dark:bg-background-prime-dk text-black dark:text-white"}>
            <div className={"mx-auto min-h-[480px] rounded-2xl drop-shadow-xl w-full md:w-4/5 bg-foreground-prime dark:bg-foreground-prime-dk"}>
               <Header />
            </div>
        </div>
    );
}
