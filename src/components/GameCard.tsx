import React from 'react';

interface GameCardProps {
  title: string;
  banner: string;
  ads: number;
}

export function GameCard ({ title, banner, ads }: GameCardProps) {
    return (
        <a href="" className="relative rounded-lg overflow-hidden">
            <img src={banner}></img>

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 lft-0 right-0">
                <strong className="font-bold text-white block">{title}</strong>
                <span className="text-zinc-300 text-sm mt-1">{ads === 1 ? `${ads} anúncio` : `${ads} anúncios`}</span>
            </div>
        </a>
    );
}