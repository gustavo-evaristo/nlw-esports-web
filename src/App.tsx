import React from 'react';
import './styles/main.css';
import Logo from './assets/logo-nlw-esports.svg';
import { MagnifyingGlassPlus } from 'phosphor-react';

export function App() {
    return (
        <div className="max-w-[1344px] mx-auto flex flex-col items-center justify-center my-10">
            <img src={Logo} alt="" className="w-64"/>
            <h1 className="text-6xl text-white font-black mt-6">Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.</h1>

            <div className="grid grid-cols-6 gap-6 mt-16">
                <a href="" className="relative rounded-lg overflow-hidden">
                    <img src="./game1.png"></img>

                    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 lft-0 right-0">
                        <strong className="font-bold text-white block">League of Legends</strong>
                        <span className="text-zinc-300 text-sm mt-1">4 anúncios</span>
                    </div>
                </a>
                <a href="" className="relative rounded-lg overflow-hidden">
                    <img src="./game2.png"></img>

                    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 lft-0 right-0">
                        <strong className="font-bold text-white block">Dota 2</strong>
                        <span className="text-zinc-300 text-sm mt-1">5 anúncios</span>
                    </div>
                </a>
                <a href="" className="relative rounded-lg overflow-hidden">
                    <img src="./game3.png"></img>

                    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 lft-0 right-0">
                        <strong className="font-bold text-white block">Counter Strike</strong>
                        <span className="text-zinc-300 text-sm mt-1">10 anúncios</span>
                    </div>
                </a>
                <a href="" className="relative rounded-lg overflow-hidden">
                    <img src="./game4.png"></img>

                    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 lft-0 right-0">
                        <strong className="font-bold text-white block">League of </strong>
                        <span className="text-zinc-300 text-sm mt-1">4 anúncios</span>
                    </div>
                </a>
                <a href="" className="relative rounded-lg overflow-hidden">
                    <img src="./game5.png"></img>

                    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 lft-0 right-0">
                        <strong className="font-bold text-white block">Apex</strong>
                        <span className="text-zinc-300 text-sm mt-1">14 anúncios</span>
                    </div>
                </a>
                <a href="" className="relative rounded-lg overflow-hidden">
                    <img src="./game6.png"></img>

                    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 lft-0 right-0">
                        <strong className="font-bold text-white block">Fortnite</strong>
                        <span className="text-zinc-300 text-sm mt-1">42 anúncios</span>
                    </div>
                </a>
            </div>

            <div className="pt-1 mt-8 bg-nlw-gradient self-stretch rounded-lg">
                <div className="bg-[#2a2634] px-8 py-6 rounded-b-lg flex justify-between items-center">
                    <div>
                        <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
                        <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
                    </div>
                    <button className="py-3 px-4 bg-violet-500 text-white rounded-md hover:bg-violet-600 flex items-center gap-2">
                        <MagnifyingGlassPlus size={24}/>
                        Publicar anúncio
                    </button>
                </div>
            </div>
        </div>
    );
}