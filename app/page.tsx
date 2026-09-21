import Image from "next/image";
import { ArrowRight, BookOpen, BrainCircuit, Camera, Check, ChefHat, Clock3, HeartHandshake, Leaf, MessageCircleMore, Palette, ShieldCheck, Sparkles, Trophy, UsersRound } from "lucide-react";

const programs = [
  { age:"3–5", title:"Little Explorers", text:"Play-led discovery, early literacy, sensory stations, music, movement and confident routines.", icon: Sparkles },
  { age:"5–8", title:"Curious Creators", text:"Homework support, reading clubs, art, hands-on science, makerspace challenges and active play.", icon: Palette },
  { age:"8–12", title:"Future Thinkers", text:"Project-based learning, STEAM labs, communication, coding concepts, problem solving and team challenges.", icon: BrainCircuit },
];
const methods = [
  ["Project-based learning","Children solve real problems through making, testing, presenting and reflecting."],
  ["Learning through play","Purposeful play develops social, cognitive and emotional skills without making learning feel like school."],
  ["Small-group coaching","Educators give focused help for homework, reading and individual learning goals."],
  ["Whole-child development","Movement, creativity, confidence, independence and kindness matter as much as academics."],
];
const facilities = [
  ["reception.jpg","Welcome & Creative Studio","A warm, thoughtfully designed arrival space that sets the tone for creativity and discovery."],
  ["play-area.jpg","Active Play Zone","A purpose-built indoor play environment for movement, coordination, confidence and joyful energy."],
  ["tree-play-area.jpg","Tree Adventure Zone","An immersive tree-inspired play structure designed for climbing, exploration and imaginative play."],
];

export default function Home(){
  return <main className="overflow-hidden">
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-[#fbfaf6]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#home" className="flex items-center gap-3"><img src="/logo.svg" alt="The Learning Atelier" className="h-14 w-14 shrink-0 rounded-full object-contain"/><div><div className="font-display text-lg font-semibold leading-none">The Learning Atelier</div><div className="mt-1 text-[10px] font-bold uppercase tracking-[.22em] text-[#648177]">Learn • Play • Belong</div></div></a>
        <nav className="hidden gap-8 text-sm font-semibold lg:flex"><a href="#programs">Programs</a><a href="#facilities">Facilities</a><a href="#approach">Our Approach</a><a href="#parents">For Parents</a></nav>
        <a href="#visit" className="rounded-full bg-[#16352f] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5">Book a tour</a>
      </div>
    </header>

    <section id="home" className="relative bg-[#fcfaf5] pt-24">
      <div className="mx-auto max-w-[1500px] px-5 pb-4 pt-5 lg:px-8">
        <div className="grid items-center gap-7 lg:grid-cols-[.72fr_1.28fr]">
          <div className="relative z-10 py-8 lg:py-12">
            <p className="text-xs font-extrabold uppercase tracking-[.25em] text-[#536b63]">After-school • Daycare • Enrichment</p>
            <h1 className="mt-4 max-w-[600px] font-display text-6xl font-semibold leading-[.92] tracking-[-.045em] text-[#102e2a] sm:text-7xl lg:text-[76px]">A Brighter<br/>Tomorrow, <span className="italic text-[#4f875b]">Every Day</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-7 text-[#465e58]">A safe, nurturing and inspiring space where children learn, play, explore and grow — beyond the classroom.</p>
            <div className="mt-6 flex flex-wrap gap-3"><a href="#visit" className="inline-flex items-center gap-3 rounded-full bg-[#3f7d50] px-7 py-3.5 font-bold text-white">Book a Tour <ArrowRight className="h-4 w-4"/></a><a href="#programs" className="rounded-full border border-[#3f7d50] bg-white px-7 py-3.5 font-bold text-[#245d3b]">Our Programs</a></div>
            <div className="mt-7 grid max-w-xl grid-cols-4 gap-2">
              {[[Leaf,"Safe & Caring","Environment"],[UsersRound,"Caring","Educators"],[BookOpen,"Small","Group Sizes"],[Sparkles,"Holistic","Development"]].map(([I,t,d]:any)=><div key={t} className="text-center"><I className="mx-auto h-7 w-7 text-[#72915e]"/><div className="mt-2 text-xs font-semibold text-[#31473f]">{t}<br/>{d}</div></div>)}
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-[90px_24px_90px_24px] bg-[#eee7da]"><Image src="/tree-play-area.jpg" alt="The Learning Atelier play environment" width={1152} height={1664} priority className="h-[590px] w-full object-cover"/></div>
            <div className="absolute -bottom-3 left-4 rounded-[55%_45%_45%_55%] bg-[#ad8bb9] px-8 py-7 text-center font-display text-2xl italic leading-tight text-white shadow-lg">Curious<br/>Minds.<br/>Kinder Futures. ♡</div>
          </div>
        </div>
        <div className="mt-5 grid overflow-hidden rounded-full border border-[#e2d8c9] bg-[#faf6ee] sm:grid-cols-2 lg:grid-cols-4">
          {[[UsersRound,"Ages 3–12","After School & Daycare"],[BookOpen,"Homework Support","Guided Learning"],[Sparkles,"Creative & STEAM","Explore. Create. Innovate."],[HeartHandshake,"Play & Social Growth","Confidence for Life"]].map(([I,t,d]:any)=><div key={t} className="flex items-center justify-center gap-4 border-b border-[#ded5c7] p-4 sm:border-r lg:border-b-0"><I className="h-8 w-8 shrink-0 text-[#9a73a5]"/><div><div className="font-bold text-[#253b35]">{t}</div><div className="text-xs text-[#68776f]">{d}</div></div></div>)}
        </div>
      </div>
    </section>

    <section id="facilities" className="relative bg-[#fcfaf5] py-12 lg:py-16">
      <div className="mx-auto max-w-[1380px] px-5 lg:px-8">
        <div className="text-center"><p className="text-xs font-extrabold uppercase tracking-[.28em] text-[#536b63]">Our Facilities</p><h2 className="mt-3 font-display text-4xl font-semibold text-[#102e2a] lg:text-5xl">Thoughtfully Designed for <span className="italic text-[#4f875b]">Every Stage</span></h2><p className="mt-2 text-[#64736d]">Bright, safe and inspiring spaces where children can learn, explore and be themselves.</p></div>
        <div className="mt-9 grid gap-6 md:grid-cols-3">
          {[["reception.jpg","Welcoming Reception","A warm and friendly space for parents and children to begin their TLA journey."],["play-area.jpg","Active Play Area","Indoor play designed to build confidence, creativity and physical development."],["tree-play-area.jpg","Creative Learning Spaces","Flexible spaces for reading, art, STEM and co-curricular activities."]].map(([img,title,text])=><article key={title}><div className="overflow-hidden rounded-2xl bg-[#eee7da]"><Image src={`/${img}`} alt={title} width={1000} height={650} className="h-[255px] w-full object-cover"/></div><h3 className="mt-3 font-display text-2xl font-semibold text-[#17342d]">{title}</h3><p className="mt-1 max-w-sm leading-6 text-[#5f6f69]">{text}</p></article>)}
        </div>
      </div>
    </section>

    <section id="approach" className="bg-[#f5f0e7] py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="overflow-hidden rounded-[80px_24px_80px_24px] bg-white p-3 shadow-sm"><Image src="/play-area.jpg" alt="Child-centered learning at The Learning Atelier" width={1000} height={800} className="h-[440px] w-full rounded-[70px_18px_70px_18px] object-cover"/></div>
          <div className="absolute -bottom-5 -right-3 rounded-full bg-[#c9b0d0] px-6 py-4 font-display text-xl italic text-white">Learn • Play • Grow</div>
        </div>
        <div><p className="text-xs font-extrabold uppercase tracking-[.25em] text-[#536b63]">Our Approach</p><h2 className="mt-4 font-display text-5xl font-semibold leading-tight tracking-[-.03em] text-[#17342d] lg:text-6xl">Learning That Feels Like <span className="italic text-[#4f875b]">Play</span></h2><p className="mt-5 max-w-xl text-lg leading-8 text-[#5b6d66]">We believe children learn best when they feel safe, curious and engaged. Our approach blends guided learning with exploration, creativity and meaningful play.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">{methods.map(([title,text],i)=><div key={title} className="rounded-3xl bg-white/80 p-5"><div className="flex items-start gap-3"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#dfe8d7] text-sm font-bold text-[#4f7655]">{i+1}</span><div><h3 className="font-display text-xl font-semibold text-[#17342d]">{title}</h3><p className="mt-1 text-sm leading-6 text-[#66756f]">{text}</p></div></div></div>)}</div>
          <a href="#programs" className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#4f875b] px-6 py-3 font-bold text-[#356743]">Discover Our Approach <ArrowRight className="h-4 w-4"/></a>
        </div>
      </div>
    </section>

    <section className="py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="rounded-[42px] bg-[#e7efe3] p-7 sm:p-10 lg:p-14"><div className="grid gap-12 lg:grid-cols-2"><div><p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#5c7e71]">A day at the atelier</p><h2 className="mt-4 font-display text-5xl font-semibold">A thoughtful rhythm, from arrival to pickup.</h2></div><div className="grid gap-4 sm:grid-cols-2">{[[Clock3,"Arrival & reset","Snack, connection and time to transition from the school day."],[BookOpen,"Focus time","Homework, reading and small-group academic coaching."],[Palette,"Create & discover","Daily rotating studios: science, art, making, cooking and more."],[Trophy,"Move & play","Active games, outdoor-style movement and social play."],[ChefHat,"Life skills","Responsibility, independence, practical skills and healthy routines."],[MessageCircleMore,"Parent handover","Clear updates so families know how the afternoon went."]].map(([I,t,d]:any)=><div key={t} className="rounded-3xl bg-white/75 p-5"><I className="h-6 w-6"/><h3 className="mt-4 font-bold">{t}</h3><p className="mt-1 text-sm leading-6 text-[#5b746c]">{d}</p></div>)}</div></div></div></div></section>

    <section id="parents" className="pb-24 lg:pb-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid overflow-hidden rounded-[42px] bg-[#f0c9bb] lg:grid-cols-2"><div className="p-8 sm:p-12 lg:p-14"><p className="text-xs font-extrabold uppercase tracking-[.22em]">Designed for working parents, too</p><h2 className="mt-4 font-display text-5xl font-semibold leading-tight">Peace of mind is part of the program.</h2><div className="mt-8 space-y-5">{[[ShieldCheck,"Secure check-in & pickup"],[UsersRound,"Attentive educator supervision"],[Camera,"Transparent parent communication"],[Leaf,"Calm, clean and welcoming spaces"]].map(([I,t]:any)=><div key={t} className="flex items-center gap-4"><div className="rounded-full bg-white/70 p-3"><I className="h-5 w-5"/></div><span className="font-bold">{t}</span></div>)}</div></div><div className="flex min-h-[460px] items-center justify-center bg-[#f7f1e7] p-4"><Image src="/reception.jpg" alt="The Learning Atelier reception" width={1200} height={1200} className="h-auto max-h-[620px] w-full object-contain"/></div></div></div></section>

    <section id="visit" className="relative bg-[#f4cc63] py-24"><div className="absolute -right-10 -top-20 h-64 w-64 rounded-full border-[30px] border-white/25"/><div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8"><div><p className="text-xs font-extrabold uppercase tracking-[.22em]">Admissions & visits</p><h2 className="mt-4 max-w-xl font-display text-6xl font-semibold tracking-[-.04em]">Come see where afternoons become adventures.</h2><p className="mt-5 max-w-lg text-lg leading-8 text-[#3f5e55]">Tell us a little about your child and preferred schedule. Our team will contact you to arrange a personal tour.</p></div><form className="relative rounded-[32px] bg-white p-6 shadow-xl sm:p-8"><div className="grid gap-4 sm:grid-cols-2"><input className="rounded-2xl border border-[#16352f]/15 px-4 py-4 outline-none focus:border-[#16352f]" placeholder="Parent name"/><input className="rounded-2xl border border-[#16352f]/15 px-4 py-4 outline-none focus:border-[#16352f]" placeholder="Phone / WhatsApp"/><input className="rounded-2xl border border-[#16352f]/15 px-4 py-4 outline-none focus:border-[#16352f]" placeholder="Child's age"/><select className="rounded-2xl border border-[#16352f]/15 bg-white px-4 py-4 outline-none"><option>Interested in...</option><option>After-school program</option><option>Daycare</option><option>Both</option></select></div><textarea className="mt-4 min-h-28 w-full rounded-2xl border border-[#16352f]/15 px-4 py-4 outline-none focus:border-[#16352f]" placeholder="Anything you'd like us to know?"/><button type="button" className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#16352f] px-6 py-4 font-bold text-white">Request a tour <ArrowRight className="h-4 w-4"/></button><p className="mt-3 text-center text-xs text-[#6c7d77]">No commitment. A team member will contact you to confirm availability. • hello@tla.one • 0324 5587838</p></form></div></section>

    <section className="bg-[#fbfaf6] px-5 py-20 text-center"><div className="mx-auto max-w-5xl rounded-[70px] bg-[#e8dfec] px-6 py-14"><h2 className="font-display text-5xl font-semibold italic text-[#5d4c67] lg:text-6xl">Curious Minds. Kinder Futures. ♡</h2><p className="mx-auto mt-4 max-w-2xl text-[#655f68]">Give your child a place to learn, play, explore and grow — every afternoon.</p><a href="#visit" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#4f875b] px-7 py-4 font-bold text-white">Book a Tour <ArrowRight className="h-4 w-4"/></a></div></section>

    <footer className="bg-[#102b26] py-12 text-white"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 lg:flex-row lg:items-end lg:px-8"><div className="flex items-center gap-3"><div className="rounded-2xl bg-white p-2"><img src="/logo.svg" alt="The Learning Atelier" className="h-[42px] w-[42px] object-contain"/></div><div><div className="font-display text-xl font-semibold">The Learning Atelier</div><div className="text-xs text-white/50">After School • Daycare • Discovery</div></div></div><div className="text-sm text-white/50">House 55, Street 5, E-11, Northern Strip, Islamabad • © 2026 The Learning Atelier</div></div></footer>
  </main>
}
