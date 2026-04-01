import { useMemo, useState } from "react"

export default function FestivalAgencySiteMockup() {
  const services = [
    {
      title: "행사 기획",
      desc: "기업행사, 지역행사, 프로모션, 브랜드 이벤트까지 목적에 맞는 기획을 제안합니다.",
    },
    {
      title: "축제 운영",
      desc: "축제 현장 운영, 동선 설계, 인력 배치, 안전 관리까지 안정적으로 진행합니다.",
    },
    {
      title: "무대 · 음향 · 조명",
      desc: "현장 규모와 콘셉트에 맞춰 무대 시스템과 음향·조명 장비를 구성합니다.",
    },
    {
      title: "영상 제작",
      desc: "행사 스케치, 홍보 영상, 현장 송출용 콘텐츠까지 한 번에 제작합니다.",
    },
  ]

  const portfolio = [
    {
      id: "dolgoji-romance-festival",
      title: "돌곶이 낭만축제",
      tag: "Festival",
      year: "2025",
      location: "서울 성북구",
      image: "/portfolio-1.jpg",
      desc: "돌곶이시장 일대에서 진행된 문화 축제로, 무대 운영과 현장 동선, 프로그램 연출을 통합 진행한 프로젝트",
      detail: "돌곶이 낭만축제는 돌곶이시장 일대에서 진행된 지역 문화 행사로, 막걸리축제·야외영화관·시장장보기·낭만버스킹 등 다양한 프로그램에 맞춰 무대 운영, 관람 동선, 현장 연출, 시스템 운영을 안정적으로 진행한 프로젝트입니다.",
      gallery: [
        "/portfolio-1.jpg",
        "/portfolio-1-2.jpg",
        "/portfolio-1-3.jpg",
        "/portfolio-1-4.jpg",
        "/portfolio-1-5.jpg",
      ],
    },
    {
      id: "jisukyoung-health-festival-2",
      title: "제 2회 지석영 건강축제",
      tag: "Festival",
      year: "2025",
      location: "서울 중랑구",
      image: "/portfolio-7.jpg",
      desc: "지역 주민 참여형 건강 테마 축제로, 프로그램 운영과 현장 동선을 통합 기획·운영한 프로젝트",
      detail: "제 2회 지석영 건강축제는 서울 중랑구에서 진행된 건강 테마 축제로, 체험부스, 건강 상담, 초음파 체험, 전통 공연, 무대 프로그램, 현장 안내 동선까지 통합 운영한 행사입니다. 참여형 콘텐츠와 안정적인 현장 운영을 중심으로 구성된 프로젝트입니다.",
      gallery: [
        "/portfolio-7.jpg",
        "/portfolio-7-2.jpg",
        "/portfolio-7-3.jpg",
        "/portfolio-7-4.jpg",
        "/portfolio-7-5.jpg",
        "/portfolio-7-6.jpg",
        "/portfolio-7-7.jpg",
        "/portfolio-7-8.jpg",
        "/portfolio-7-9.jpg",
        "/portfolio-7-10.jpg",
        "/portfolio-7-11.jpg",
      ],
    },
    {
      id: "child-traffic-safety-festival-1",
      title: "제 1회 어린이 교통안전문화 축제",
      tag: "Festival",
      year: "2025",
      location: "서울 중랑구",
      image: "/portfolio-9.jpg",
      desc: "어린이를 대상으로 한 교통안전 체험형 축제로, 교육 프로그램과 현장 운영을 통합 기획한 프로젝트",
      detail: "제 1회 어린이 교통안전문화 축제는 어린이들이 교통안전을 쉽고 재미있게 체험할 수 있도록 구성된 참여형 행사로, 체험 부스 운영, 안전 교육 프로그램, 무대 진행, 현장 동선 관리까지 통합적으로 기획·운영된 프로젝트입니다.",
      gallery: [
        "/portfolio-9.jpg",
        "/portfolio-9-2.jpg",
        "/portfolio-9-3.jpg",
        "/portfolio-9-4.jpg",
        "/portfolio-9-5.jpg",
        "/portfolio-9-6.jpg",
        "/portfolio-9-7.jpg",
        "/portfolio-9-8.jpg",
        "/portfolio-9-9.jpg",
        "/portfolio-9-10.jpg",
        "/portfolio-9-11.jpg",
        "/portfolio-9-12.jpg",
        "/portfolio-9-13.jpg",
      ],
        },
    {
      id: "jurak-festival-series",
      title: "제 2회, 제 3회 주락이 페스티벌",
      tag: "Festival",
      year: "2025",
      location: "서울 성북구",
      image: "/portfolio-10.jpg",
      desc: "지역 참여형 축제로 다양한 체험 프로그램과 무대 운영을 통합 기획·운영한 프로젝트",
      detail: "제 2회 및 제 3회 주락이 페스티벌은 지역 주민과 방문객이 함께 즐길 수 있도록 기획된 참여형 축제로, 체험 부스, 공연 프로그램, 현장 동선 설계, 운영 인력 배치, 안전 관리까지 전반적인 운영을 통합적으로 수행한 프로젝트입니다.",
      gallery: [
        "/portfolio-10.jpg",
        "/portfolio-10-2.jpg",
        "/portfolio-10-3.jpg",
        "/portfolio-10-4.jpg",
        "/portfolio-10-5.jpg",
        "/portfolio-10-6.jpg",
        "/portfolio-10-7.jpg",
      ],
    }
  ]

  const [selectedPortfolioId, setSelectedPortfolioId] = useState(portfolio[0]?.id)

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    project: "",
    type: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = encodeURIComponent(`[문의] ${form.project || "프로젝트 문의"}`)
    const body = encodeURIComponent(
      `담당자명: ${form.name}
연락처: ${form.phone}
이메일: ${form.email}
문의유형: ${form.type}

내용:
${form.message}`
    )

    window.location.href = `mailto:kimset11@naver.com?subject=${subject}&body=${body}`
  }

  const selectedPortfolio = useMemo(
    () => portfolio.find((item) => item.id === selectedPortfolioId) ?? portfolio[0],
    [portfolio, selectedPortfolioId]
  )

  const rentals = [
    {
      title: "무대 렌탈",
      desc: "행사 규모에 맞는 무대 시스템을 안전하게 설치하고 운영합니다.",
    },
    {
      title: "조명 렌탈",
      desc: "축제와 공연 분위기를 살리는 조명 장비를 현장에 맞춰 구성합니다.",
    },
    {
      title: "음향 렌탈",
      desc: "야외 행사와 실내 행사에 맞는 음향 장비를 안정적으로 제공합니다.",
    },
    {
      title: "영상 장비 렌탈",
      desc: "LED, 빔프로젝터, 송출 장비 등 현장 운영에 필요한 영상 장비를 지원합니다.",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-white p-2 shadow-sm ring-1 ring-zinc-200">
              <img
                src="/logo.png"
                alt="KIMS logo"
                className="h-16 w-auto object-contain shrink-0 brightness-0 contrast-200"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight">KIMS entertainment</p>
              <p className="text-xs text-zinc-500">행사 · 축제 기획 / 운영 / 렌탈</p>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="hover:text-zinc-600">회사소개</a>
            <a href="#services" className="hover:text-zinc-600">사업영역</a>
            <a href="#portfolio" className="hover:text-zinc-600">포트폴리오</a>
            <a href="#rental" className="hover:text-zinc-600">렌탈</a>
            <a href="#contact" className="hover:text-zinc-600">문의</a>
          </nav>
        </div>
      </header>

      <section className="border-b bg-zinc-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2 md:py-32">
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-400">Event & Festival Agency</p>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              행사와 축제를
              <br />
              가장 현장답게 만듭니다
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-300 md:text-lg">
              기획부터 연출, 운영, 장비 렌탈, 영상 제작까지 한 번에 진행하는 행사·축제 전문 대행사입니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 shadow-sm transition hover:-translate-y-0.5">
                프로젝트 문의하기
              </a>
              <a href="#portfolio" className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                포트폴리오 보기
              </a>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl bg-white/10 p-6 shadow-lg">
              <p className="text-sm text-zinc-400">기획</p>
              <p className="mt-2 text-2xl font-bold">브랜드 행사 · 지역 축제 · 공공 행사</p>
            </div>
            <div className="rounded-3xl bg-white/10 p-6 shadow-lg">
              <p className="text-sm text-zinc-400">운영</p>
              <p className="mt-2 text-2xl font-bold">현장 동선 · 진행 · 인력 · 안전 관리</p>
            </div>
            <div className="rounded-3xl bg-white/10 p-6 shadow-lg">
              <p className="text-sm text-zinc-400">장비</p>
              <p className="mt-2 text-2xl font-bold">무대 · 음향 · 조명 · 영상 렌탈</p>
            </div>
            <div className="rounded-3xl bg-white/10 p-6 shadow-lg">
              <p className="text-sm text-zinc-400">제작</p>
              <p className="mt-2 text-2xl font-bold">스케치 영상 · 홍보 콘텐츠 · 송출 영상</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">About</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">기획부터 현장 운영까지, 한 팀으로 움직입니다</h2>
            <p className="mt-6 text-base leading-8 text-zinc-600">
              KIMS entertainment은 행사와 축제를 단순히 진행하는 것이 아니라, 현장의 목적과 분위기를 함께 설계하는 팀입니다.
              클라이언트의 목표에 맞는 기획안 작성부터 무대 연출, 운영 인력 구성, 장비 렌탈, 현장 콘텐츠 제작까지 통합적으로 제안합니다.
            </p>
          </div>
          <div className="rounded-3xl border bg-zinc-50 p-8 shadow-sm">
            <p className="text-lg font-bold">핵심 강점</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-700">
              <li>• 행사 기획 + 현장 운영 + 장비 렌탈 통합 진행</li>
              <li>• 축제/공공행사/기업 프로모션 맞춤 제안</li>
              <li>• 무대·음향·조명·영상 장비 자체 연계 가능</li>
              <li>• 일정, 예산, 콘셉트에 맞춘 실무형 플랜 구성</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="services" className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Services</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">사업 영역</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((item) => (
              <div key={item.title} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-zinc-100 transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Portfolio</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">주요 프로젝트</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600">
              KIMS entertainment가 진행한 행사와 축제 운영 사례를 한눈에 볼 수 있도록 정리한 포트폴리오입니다.
            </p>
          </div>
          <a href="#contact" className="rounded-2xl border px-4 py-2 text-sm font-semibold hover:bg-zinc-50">견적 문의</a>
        </div>

        <div className="mb-8 rounded-3xl bg-zinc-50 p-5 ring-1 ring-zinc-100">
          <p className="text-sm font-semibold text-zinc-800">포트폴리오 사진 넣는 방법</p>
          <p className="mt-2 text-sm leading-7 text-zinc-600">
            아래 카드에 연결된 이미지 파일명을 기준으로 행사 사진을 public 폴더에 넣으면 바로 반영됩니다.
            예: /public/portfolio-1.jpg, /public/portfolio-7.jpg
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolio.map((item) => (
            <article key={item.id} className="overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-64 overflow-hidden bg-zinc-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    const next = e.currentTarget.nextElementSibling
                    if (next) next.classList.remove('hidden')
                  }}
                />
                <div className="hidden h-full w-full items-center justify-center bg-zinc-100 text-sm text-zinc-500">
                  포트폴리오 사진 준비중
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">{item.tag}</span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-500">{item.year}</span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-500">{item.location}</span>
                </div>
                <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{item.desc}</p>
                <button
                  type="button"
                  onClick={() => setSelectedPortfolioId(item.id)}
                  className="mt-5 rounded-2xl bg-zinc-950 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  상세보기
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border bg-zinc-950 p-6 text-white shadow-xl md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Portfolio Detail</p>
              <h3 className="mt-3 text-2xl font-bold md:text-3xl">{selectedPortfolio?.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-white/10 px-3 py-1 font-semibold">{selectedPortfolio?.tag}</span>
                <span className="rounded-full bg-white/10 px-3 py-1 font-semibold">{selectedPortfolio?.year}</span>
                <span className="rounded-full bg-white/10 px-3 py-1 font-semibold">{selectedPortfolio?.location}</span>
              </div>
            </div>
            <a href="#contact" className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-zinc-950">이 프로젝트 문의하기</a>
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-zinc-300">{selectedPortfolio?.detail}</p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {selectedPortfolio?.gallery.map((image, index) => (
              <div key={image} className="overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10">
                <div className="h-56 bg-zinc-800">
                  <img
                    src={image}
                    alt={`${selectedPortfolio?.title} 사진 ${index + 1}`}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      const next = e.currentTarget.nextElementSibling
                      if (next) next.classList.remove('hidden')
                    }}
                  />
                  <div className="hidden h-full w-full items-center justify-center bg-zinc-900 text-sm text-zinc-400">
                    상세 사진 준비중
                  </div>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </section>

      <section id="rental" className="bg-zinc-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Rental</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">렌탈 서비스</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300">
                행사와 축제 현장에 필요한 주요 장비를 렌탈 형태로 제공하며, 설치와 운영까지 함께 진행할 수 있습니다.
              </p>
            </div>
            <a href="#contact" className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950">렌탈 문의하기</a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {rentals.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-sm">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Contact</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">프로젝트 문의 메일 작성</h2>
            <p className="mt-5 text-base leading-8 text-zinc-600">
              필요한 내용을 작성하시면 이메일 작성창이 열리며, 확인 후 보내기를 눌러 문의를 전송할 수 있습니다.
            </p>
            <div className="mt-8 space-y-3 text-sm text-zinc-700">
              <p><span className="font-semibold">Tel.</span> 010-7604-0025</p>
              <p><span className="font-semibold">E-mail.</span> kimset11@naver.com</p>
              <p><span className="font-semibold">Fax.</span> 0504-376-0025</p>
              <p><span className="font-semibold">Kakao.</span> Kims-ent</p>

            </div>
          </div>
          <form onSubmit={handleSubmit} className="rounded-3xl border bg-zinc-50 p-6 shadow-sm">
            <div className="grid gap-4 md:grid-cols-2">
              <input name="name" value={form.name} onChange={handleChange} className="rounded-2xl border bg-white px-4 py-3 outline-none" placeholder="담당자명" />
              <input name="phone" value={form.phone} onChange={handleChange} className="rounded-2xl border bg-white px-4 py-3 outline-none" placeholder="연락처" />
              <input name="email" value={form.email} onChange={handleChange} className="rounded-2xl border bg-white px-4 py-3 outline-none md:col-span-2" placeholder="이메일" />
              <input name="project" value={form.project} onChange={handleChange} className="rounded-2xl border bg-white px-4 py-3 outline-none md:col-span-2" placeholder="행사명 / 프로젝트명" />
              <select name="type" value={form.type} onChange={handleChange} className="rounded-2xl border bg-white px-4 py-3 outline-none md:col-span-2">
                <option>문의 유형 선택</option>
                <option>행사 기획</option>
                <option>축제 운영</option>
                <option>렌탈 문의</option>
                <option>영상 제작</option>
              </select>
              <textarea name="message" value={form.message} onChange={handleChange} className="min-h-[160px] rounded-2xl border bg-white px-4 py-3 outline-none md:col-span-2" placeholder="행사 일정, 장소, 예산, 필요한 서비스 등을 적어주세요" />
            </div>
            <button type="submit" className="mt-5 w-full rounded-2xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90">
              이메일로 문의하기
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 KIMS entertainment. All rights reserved.</p>
          <p>행사 · 축제 기획 / 현장 운영 / 장비 렌탈 / 영상 제작</p>
        </div>
      </footer>
    </div>
  )
}
