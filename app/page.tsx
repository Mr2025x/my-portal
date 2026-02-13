import PokemonCard from "./components/PokemonCard";
import StarBackground from "./components/StarBackground";

export default function Home() {
  return (
    <main className="relative flex min-h-[100svh] flex-col items-center justify-center bg-[#050505] overflow-hidden selection:bg-stone-500/30 selection:text-stone-200">
      
      {/* 1. 全局噪点纹理 (必加，质感来源) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      {/* === 修改开始：插入星空组件 === */}
      {/* 2. 星空背景层 (它内部设置了 z-index: 1) */}
      <StarBackground />
      {/* === 修改结束 === */}
      {/* 2. 电影感暗角 (Vignette) - 聚焦视线 */}
      <div className="fixed inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#000000_120%)]"></div>

      {/* 3. 装饰：四个角落的“结界”线条 */}
      <div className="fixed inset-6 md:inset-10 z-20 pointer-events-none border border-white/5 rounded-3xl opacity-60">
        {/* 四角加重 */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20 rounded-tl-xl"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/20 rounded-tr-xl"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/20 rounded-bl-xl"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20 rounded-br-xl"></div>
      </div>

      {/* === 内容层 === */}
      <div className="relative z-30 flex flex-col items-center w-full max-w-6xl px-4">
        
        {/* 头部区域 */}
        <div className="mb-16 md:mb-24 text-center space-y-5">
          {/* 标题：使用 Cinzel，增加石刻阴影 */}
          <h1 className="text-5xl md:text-8xl font-bold tracking-[0.1em] text-[#E0E0E0] font-[family-name:var(--font-mystery)] 
                         drop-shadow-[0_10px_20px_rgba(0,0,0,1)] 
                         [text-shadow:0_2px_0_rgba(255,255,255,0.05)]">
            PLANKTON'S PORTAL
          </h1>
          
          {/* 副标题：改用 Cormorant Garamond (衬线体) + 宽间距 */}
          <div className="flex items-center justify-center gap-4 opacity-60">
            <span className="hidden md:block h-[1px] w-12 bg-gradient-to-r from-transparent to-stone-600"></span>
            <p className="text-stone-400 font-[family-name:var(--font-serif)] italic text-lg md:text-xl tracking-[0.2em]">
              Gateway to the Unknown
            </p>
            <span className="hidden md:block h-[1px] w-12 bg-gradient-to-l from-transparent to-stone-600"></span>
          </div>
        </div>

        {/* 卡牌区域：增加透视感 */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-12 items-center justify-center perspective-[2000px] w-full">
          <PokemonCard name="Grimoire" img="/card-blog.jpg" href="https://blog.plankton2005.best" />
          <PokemonCard name="Archives" img="/card-wiki.jpg" href="https://wiki.plankton2005.best" />
          <PokemonCard name="Construct" img="/card-github.jpg" href="https://github.com/Mr2025x/my-portal/tree/main" />
        </div>

        {/* 页脚：极简，融入背景 */}
        <footer className="mt-24 md:mt-32 text-center opacity-40 hover:opacity-80 transition-opacity duration-500">
            <p className="text-[10px] text-stone-500 font-[family-name:var(--font-inter)] tracking-[0.4em] uppercase cursor-default">
                Est. 2026 • Digital Sanctum
            </p>
        </footer>
      </div>
    </main>
  );
}