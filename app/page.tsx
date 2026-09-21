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

    <section id="home" className="relative bg-[#fbfaf6] pt-24">
      <div className="mx-auto max-w-[1500px] px-5 pb-8 pt-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[.78fr_1.22fr]">
          <div className="relative z-10 py-10 lg:py-16">
            <p className="text-xs font-extrabold uppercase tracking-[.25em] text-[#728266]">After-school • Daycare • Enrichment</p>
            <h1 className="mt-5 max-w-[620px] font-display text-6xl font-semibold leading-[.98] tracking-[-.045em] text-[#182e28] sm:text-7xl lg:text-[78px]">A Brighter Tomorrow, <span className="italic text-[#71845f]">Every Day.</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#566a63]">A safe, nurturing and inspiring space where children learn, play, explore and grow — beyond the classroom.</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href="#visit" className="inline-flex items-center gap-3 rounded-full bg-[#75865e] px-7 py-4 font-bold text-white shadow-lg">Book a Tour <ArrowRight className="h-4 w-4"/></a><a href="#programs" className="rounded-full border border-[#75865e]/30 bg-white px-7 py-4 font-bold text-[#34483f]">Our Programs</a></div>
            <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[[ShieldCheck,"Safe Environment"],[UsersRound,"Caring Educators"],[BookOpen,"Small Group Sizes"],[HeartHandshake,"Holistic Development"]].map(([I,t]:any)=><div key={t} className="rounded-2xl bg-[#f2eee5] p-4 text-center"><I className="mx-auto h-6 w-6 text-[#87966f]"/><div className="mt-2 text-xs font-bold text-[#43574f]">{t}</div></div>)}
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-[70px_22px_70px_22px] bg-[#eee7da] shadow-xl"><Image src="/tree-play-area.jpg" alt="The Learning Atelier play environment" width={1152} height={1664} priority className="max-h-[650px] h-auto w-full object-contain"/></div>
            <div className="absolute -bottom-5 left-5 rounded-[32px] bg-[#b59abd] px-7 py-6 text-center font-display text-2xl italic leading-tight text-white shadow-xl sm:left-10">Curious Minds.<br/>Kinder Futures.</div>
          </div>
        </div>
        <div className="mt-10 grid overflow-hidden rounded-[28px] border border-[#dcd4c6] bg-[#f7f2e9] sm:grid-cols-2 lg:grid-cols-4">
          {[[UsersRound,"Ages 3–12","After School & Daycare"],[BookOpen,"Homework Support","Guided Learning"],[Sparkles,"Creative & STEAM","Explore. Create. Innovate."],[HeartHandshake,"Play & Social Growth","Confidence for Life"]].map(([I,t,d]:any)=><div key={t} className="flex items-center gap-4 border-b border-[#dcd4c6] p-5 last:border-0 sm:border-r lg:border-b-0"><I className="h-8 w-8 shrink-0 text-[#9a84a4]"/><div><div className="font-bold text-[#273d35]">{t}</div><div className="text-sm text-[#68776f]">{d}</div></div></div>)}
        </div>
      </div>
    </section>

    <div className="overflow-hidden bg-[#16352f] py-4 text-white"><div className="marquee flex w-max gap-14 whitespace-nowrap text-sm font-bold uppercase tracking-[.18em]"><span>Homework Support</span><span>STEAM Lab</span><span>Creative Arts</span><span>Reading Club</span><span>Active Play</span><span>Life Skills</span><span>Daycare</span><span>Homework Support</span><span>STEAM Lab</span><span>Creative Arts</span><span>Reading Club</span><span>Active Play</span><span>Life Skills</span><span>Daycare</span></div></div>

    <section id="programs" className="py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-2"><div><p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#ea815f]">Programs that grow with them</p><h2 className="mt-4 max-w-xl font-display text-5xl font-semibold leading-tight tracking-[-.03em] lg:text-6xl">More than somewhere to go after school.</h2></div><p className="max-w-xl self-end text-lg leading-8 text-[#5b746c]">Each program balances academic confidence with creativity, movement, friendship and independence—so afternoons feel meaningful, not managed.</p></div>
      <div className="mt-14 grid gap-5 md:grid-cols-3">{programs.map(({age,title,text,icon:Icon},i)=><article key={title} className={`rounded-[32px] p-7 ${i===0?'bg-[#dce7d7]':i===1?'bg-[#f4cc63]/55':'bg-[#c9e5e6]'}`}><div className="flex items-center justify-between"><div className="rounded-full bg-white/70 px-3 py-1 text-xs font-bold">Ages {age}</div><Icon className="h-7 w-7"/></div><h3 className="mt-12 font-display text-3xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-[#49665e]">{text}</p><div className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold">Explore program <ArrowRight className="h-4 w-4"/></div></article>)}</div>
    </div></section>

    <section id="facilities" className="bg-[#16352f] py-24 text-white lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#f4cc63]">Purpose-built environment</p><h2 className="mt-4 max-w-3xl font-display text-5xl font-semibold tracking-[-.03em] lg:text-6xl">A space that invites children to explore.</h2></div><p className="max-w-md leading-7 text-white/65">Flexible, beautiful and child-centered zones designed to support focus, collaboration, imagination and movement.</p></div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">{facilities.map(([img,title,text])=><article key={title} className="group overflow-hidden rounded-[32px] bg-white/5"><div className="flex min-h-[300px] items-center justify-center overflow-hidden bg-[#f7f1e7] p-2"><Image src={`/${img}`} alt={title} width={1200} height={1200} className="max-h-[520px] h-auto w-full object-contain transition duration-500 group-hover:scale-[1.015]"/></div><div className="p-6"><h3 className="font-display text-2xl font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/65">{text}</p></div></article>)}</div>
    </div></section>

    <section id="approach" className="bg-[#f4efe5] py-24 lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-8"><div className="lg:sticky lg:top-28 lg:self-start"><p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#ea815f]">How children learn here</p><h2 className="mt-4 font-display text-5xl font-semibold tracking-[-.03em] lg:text-6xl">Curiosity first. Confidence follows.</h2><p className="mt-5 max-w-md text-lg leading-8 text-[#5b746c]">Our educators act as coaches and co-explorers—guiding children without over-directing them.</p></div><div className="space-y-4">{methods.map(([title,text],i)=><div key={title} className="rounded-[28px] border border-[#16352f]/10 bg-white/75 p-7 sm:p-8"><div className="flex gap-5"><span className="font-display text-2xl font-semibold text-[#ea815f]">0{i+1}</span><div><h3 className="font-display text-2xl font-semibold">{title}</h3><p className="mt-2 max-w-2xl leading-7 text-[#5b746c]">{text}</p></div></div></div>)}</div></div></section>

    <section className="py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="rounded-[42px] bg-[#e7efe3] p-7 sm:p-10 lg:p-14"><div className="grid gap-12 lg:grid-cols-2"><div><p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#5c7e71]">A day at the atelier</p><h2 className="mt-4 font-display text-5xl font-semibold">A thoughtful rhythm, from arrival to pickup.</h2></div><div className="grid gap-4 sm:grid-cols-2">{[[Clock3,"Arrival & reset","Snack, connection and time to transition from the school day."],[BookOpen,"Focus time","Homework, reading and small-group academic coaching."],[Palette,"Create & discover","Daily rotating studios: science, art, making, cooking and more."],[Trophy,"Move & play","Active games, outdoor-style movement and social play."],[ChefHat,"Life skills","Responsibility, independence, practical skills and healthy routines."],[MessageCircleMore,"Parent handover","Clear updates so families know how the afternoon went."]].map(([I,t,d]:any)=><div key={t} className="rounded-3xl bg-white/75 p-5"><I className="h-6 w-6"/><h3 className="mt-4 font-bold">{t}</h3><p className="mt-1 text-sm leading-6 text-[#5b746c]">{d}</p></div>)}</div></div></div></div></section>

    <section id="parents" className="pb-24 lg:pb-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid overflow-hidden rounded-[42px] bg-[#f0c9bb] lg:grid-cols-2"><div className="p-8 sm:p-12 lg:p-14"><p className="text-xs font-extrabold uppercase tracking-[.22em]">Designed for working parents, too</p><h2 className="mt-4 font-display text-5xl font-semibold leading-tight">Peace of mind is part of the program.</h2><div className="mt-8 space-y-5">{[[ShieldCheck,"Secure check-in & pickup"],[UsersRound,"Attentive educator supervision"],[Camera,"Transparent parent communication"],[Leaf,"Calm, clean and welcoming spaces"]].map(([I,t]:any)=><div key={t} className="flex items-center gap-4"><div className="rounded-full bg-white/70 p-3"><I className="h-5 w-5"/></div><span className="font-bold">{t}</span></div>)}</div></div><div className="flex min-h-[460px] items-center justify-center bg-[#f7f1e7] p-4"><Image src="/reception.jpg" alt="The Learning Atelier reception" width={1200} height={1200} className="h-auto max-h-[620px] w-full object-contain"/></div></div></div></section>

    <section id="visit" className="relative bg-[#f4cc63] py-24"><div className="absolute -right-10 -top-20 h-64 w-64 rounded-full border-[30px] border-white/25"/><div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8"><div><p className="text-xs font-extrabold uppercase tracking-[.22em]">Admissions & visits</p><h2 className="mt-4 max-w-xl font-display text-6xl font-semibold tracking-[-.04em]">Come see where afternoons become adventures.</h2><p className="mt-5 max-w-lg text-lg leading-8 text-[#3f5e55]">Tell us a little about your child and preferred schedule. Our team will contact you to arrange a personal tour.</p></div><form className="relative rounded-[32px] bg-white p-6 shadow-xl sm:p-8"><div className="grid gap-4 sm:grid-cols-2"><input className="rounded-2xl border border-[#16352f]/15 px-4 py-4 outline-none focus:border-[#16352f]" placeholder="Parent name"/><input className="rounded-2xl border border-[#16352f]/15 px-4 py-4 outline-none focus:border-[#16352f]" placeholder="Phone / WhatsApp"/><input className="rounded-2xl border border-[#16352f]/15 px-4 py-4 outline-none focus:border-[#16352f]" placeholder="Child's age"/><select className="rounded-2xl border border-[#16352f]/15 bg-white px-4 py-4 outline-none"><option>Interested in...</option><option>After-school program</option><option>Daycare</option><option>Both</option></select></div><textarea className="mt-4 min-h-28 w-full rounded-2xl border border-[#16352f]/15 px-4 py-4 outline-none focus:border-[#16352f]" placeholder="Anything you'd like us to know?"/><button type="button" className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#16352f] px-6 py-4 font-bold text-white">Request a tour <ArrowRight className="h-4 w-4"/></button><p className="mt-3 text-center text-xs text-[#6c7d77]">No commitment. A team member will contact you to confirm availability. • hello@tla.one • 0324 5587838</p></form></div></section>

    <footer className="bg-[#102b26] py-12 text-white"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 lg:flex-row lg:items-end lg:px-8"><div className="flex items-center gap-3"><div className="rounded-2xl bg-white p-2"><img src="/logo.svg" alt="The Learning Atelier" className="h-[42px] w-[42px] object-contain"/></div><div><div className="font-display text-xl font-semibold">The Learning Atelier</div><div className="text-xs text-white/50">After School • Daycare • Discovery</div></div></div><div className="text-sm text-white/50">House 55, Street 5, E-11, Northern Strip, Islamabad • © 2026 The Learning Atelier</div></div></footer>
  </main>
}
