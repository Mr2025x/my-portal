import PokemonCard from "./components/PokemonCard";

export default function Home() {
  return (
    // 1. 背景改用极夜黑 (#020203)
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-[#020203] py-20 overflow-hidden">
      
      {/* === 氛围层：更幽暗的星云光斑 === */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         {/* 左上角：深幽紫 */}
         <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/20 blur-[150px] rounded-full mix-blend-screen animate-pulse"></div>
         {/* 右下角：暗红/虚空色 */}
         <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-fuchsia-900/20 blur-[150px] rounded-full mix-blend-screen"></div>
         {/* 中间微弱的星尘 */}
         <div className="absolute top-[20%] left-[50%] w-[300px] h-[300px] bg-blue-900/10 blur-[100px] rounded-full translate-x-[-50%]"></div>
      </div>

      {/* === 内容层 === */}
      <div className="relative z-10 mb-20 text-center">
        {/* 2. 标题：使用神秘字体 + 月光渐变 */}
        <h1 className="mb-6 text-6xl md:text-7xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-indigo-100 via-purple-200 to-indigo-900 font-[family-name:var(--font-mystery)] drop-shadow-[0_0_15px_rgba(165,180,252,0.3)]">
          Plankton's Portal
        </h1>
        
        {/* 副标题：极简风格，拉大字间距 */}
        <div className="flex items-center justify-center gap-4 opacity-60">
          <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-indigo-500"></span>
          <p className="text-indigo-200 font-light tracking-[0.5em] text-xs uppercase">
            Gateway to the Unknown
          </p>
          <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-indigo-500"></span>
        </div>
      </div>

      {/* === 卡牌容器 === */}
      <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center justify-center perspective-[1200px]">
        
        <PokemonCard
          name="Grimoire"  // 意思是“魔法书”，比 Blog 更神秘
          img="/card-blog.jpg"
          href="https://blog.yourdomain.com"
        />

        <PokemonCard
          name="Archives"  // 意思是“档案馆”，比 Wiki 更神秘
          img="/card-wiki.jpg"
          href="https://wiki.yourdomain.com"
        />

        <PokemonCard
          name="Construct" // 意思是“构造体”，比 GitHub 代码库更神秘
          img="/card-github.jpg"
          href="https://github.com/yourusername"
        />

      </div>
      
      {/* 页脚 */}
      <footer className="relative z-10 mt-24 text-[10px] text-indigo-900/60 tracking-[0.3em] font-sans">
        EST. 2026 • DIGITAL SANCTUM
      </footer>
    </main>
  );
}