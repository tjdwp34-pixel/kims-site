import { useEffect, useMemo, useRef, useState } from "react"

export default function FestivalAgencySiteMockup() {
  const services = [
    {
      title: "행사 기획",
      desc: "기업 행사, 지역 행사, 프로모션, 브랜드 이벤트까지 목적과 타깃에 최적화된 기획을 제안합니다.",
    },
    {
      title: "축제 운영",
      desc: "축제 현장 운영, 동선 설계, 인력 배치, 안전 관리까지 체계적으로 수행합니다.",
    },
    {
      title: "무대 · 음향 · 조명",
      desc: "현장 규모와 콘셉트에 최적화된 무대 시스템 및 음향·조명 장비를 설계·구성합니다.",
    },
    {
      title: "영상 제작",
      desc: "행사 스케치, 홍보 영상, 현장 송출 콘텐츠까지 통합 제작합니다.",
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
        },
    {
      id: "jangahn-carrot-market-1",
      title: "제 1회 장안 짤짤이 어린이 당근 마켓",
      tag: "Festival",
      year: "2024",
      location: "서울 동대문구",
      image: "/portfolio-11.jpg",
      desc: "어린이 참여형 플리마켓 행사로, 체험과 거래 활동을 결합한 교육형 프로그램을 기획·운영한 프로젝트",
      detail: "제 1회 장안 짤짤이 어린이 당근 마켓은 어린이들이 직접 물건을 사고파는 경험을 통해 경제 개념을 자연스럽게 익힐 수 있도록 기획된 참여형 행사입니다. 플리마켓 운영, 체험 프로그램, 현장 동선 설계, 안전 관리, 운영 인력 배치까지 전반적인 행사 운영을 통합적으로 수행한 프로젝트입니다.",
      gallery: [
        "/portfolio-11.jpg",
        "/portfolio-11-2.jpg",
        "/portfolio-11-3.jpg",
        "/portfolio-11-4.jpg",
        "/portfolio-11-5.jpg",
        "/portfolio-11-6.jpg",
        "/portfolio-11-7.jpg",
        "/portfolio-11-8.jpg",
        "/portfolio-11-9.jpg",
        "/portfolio-11-10.jpg",
      ],
        },
    {
      id: "malcon-market-series",
      title: "1회~6회 말콩달콩 플리마켓 축제",
      tag: "Festival",
      year: "2024",
      location: "서울 중랑구",
      image: "/portfolio-12.jpg",
      desc: "지역 기반 플리마켓 축제로, 반복 운영을 통해 안정적인 행사 구조와 참여형 콘텐츠를 구축한 프로젝트",
      detail: "1회부터 6회까지 진행된 말콩달콩 플리마켓 축제는 지역 주민과 방문객이 함께 참여하는 지속형 행사로, 셀러 운영, 체험 프로그램, 무대 구성, 현장 동선 설계, 운영 인력 배치 및 안전 관리까지 전반적인 운영을 반복적으로 수행하며 완성도를 높인 프로젝트입니다.",
      gallery: [
        "/portfolio-12.jpg",
        "/portfolio-12-2.jpg",
        "/portfolio-12-3.jpg",
        "/portfolio-12-4.jpg",
        "/portfolio-12-5.jpg",
        "/portfolio-12-6.jpg",
        "/portfolio-12-7.jpg",
        "/portfolio-12-8.jpg",
        "/portfolio-12-9.jpg",
        "/portfolio-12-10.jpg",
        "/portfolio-12-11.jpg",
      ],
    },
    {
      id: "jungnang-green-festival",
      title: "중랑그린 페스티벌",
      tag: "Festival",
      year: "2023",
      location: "서울 중랑구",
      image: "/portfolio-13.jpg",
      desc: "친환경 테마로 진행된 지역 축제로, 체험 프로그램과 무대 운영을 통합 기획한 프로젝트",
      detail: "중랑그린 페스티벌은 친환경과 지역 커뮤니티를 주제로 기획된 행사로, 체험형 프로그램, 친환경 부스, 무대 운영, 현장 동선 설계 및 안전 관리까지 전반적인 운영을 통합적으로 수행한 프로젝트입니다.",
      gallery: [
        "/portfolio-13.jpg",
        "/portfolio-13-2.jpg",
        "/portfolio-13-3.jpg",
        "/portfolio-13-4.jpg",
        "/portfolio-13-5.jpg",
        "/portfolio-13-6.jpg",
        "/portfolio-13-7.jpg",
        "/portfolio-13-8.jpg",
        "/portfolio-13-9.jpg",
        "/portfolio-13-10.jpg",
        "/portfolio-13-11.jpg",
      ],
    },
    {
      id: "dongbu-makgeolli-festival-series",
      title: "제 1회, 제 2회 동부시장 막걸리 축제",
      tag: "Festival",
      year: "2024",
      location: "서울 중랑구",
      image: "/portfolio-14.jpg",
      desc: "전통시장 활성화를 위한 막걸리 테마 축제로, 먹거리·체험·공연을 결합한 참여형 행사 운영 프로젝트",
      detail: "동부시장 막걸리 축제는 전통시장 활성화를 목적으로 기획된 지역 축제로, 막걸리 시음, 먹거리 부스, 공연 프로그램, 체험 콘텐츠를 결합한 참여형 행사입니다. 현장 동선 설계, 무대 운영, 인력 배치, 안전 관리까지 전반적인 운영을 통합적으로 수행한 프로젝트입니다.",
      gallery: [
        "/portfolio-14.jpg",
        "/portfolio-14-2.jpg",
        "/portfolio-14-3.jpg",
        "/portfolio-14-4.jpg",
        "/portfolio-14-5.jpg",
        "/portfolio-14-6.jpg",
        "/portfolio-14-7.jpg",
        "/portfolio-14-8.jpg",
        "/portfolio-14-9.jpg",
        "/portfolio-14-10.jpg",
      ],
    }
  ]

  const [selectedPortfolioId, setSelectedPortfolioId] = useState(portfolio[0]?.id)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState(null)
  const [heroIndex, setHeroIndex] = useState(0)
  const portfolioDetailRef = useRef(null)
  const portfolioListRef = useRef(null)
  const portfolioGalleryRef = useRef(null)

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

  const handleSubmit = async (e) => {
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

    const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"
    const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"
    const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"

    const isEmailJsConfigured =
      EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY" &&
      EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID" &&
      EMAILJS_TEMPLATE_ID !== "YOUR_TEMPLATE_ID"

    if (!isEmailJsConfigured) {
      window.location.href = `mailto:kimset11@naver.com?subject=${subject}&body=${body}`
      return
    }

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            user_name: form.name,
            user_phone: form.phone,
            user_email: form.email,
            project_name: form.project,
            inquiry_type: form.type,
            message: form.message,
          },
        }),
      })

      if (!response.ok) {
        throw new Error("EmailJS 전송 실패")
      }

      alert("문의가 전송되었습니다.")
      setForm({
        name: "",
        phone: "",
        email: "",
        project: "",
        type: "",
        message: "",
      })
    } catch (error) {
      window.location.href = `mailto:kimset11@naver.com?subject=${subject}&body=${body}`
    }
  }

  const sortedPortfolio = useMemo(() => {
    return [...portfolio].sort((a, b) => Number(b.year) - Number(a.year))
  }, [portfolio])

  const featuredPortfolio = useMemo(() => sortedPortfolio.slice(0, 3), [sortedPortfolio])

  const selectedPortfolio = useMemo(
    () => sortedPortfolio.find((item) => item.id === selectedPortfolioId) ?? sortedPortfolio[0],
    [sortedPortfolio, selectedPortfolioId]
  )

  const handlePortfolioSelect = (id) => {
    setSelectedPortfolioId(id)
    setMobileMenuOpen(false)

    requestAnimationFrame(() => {
      setTimeout(() => {
        portfolioDetailRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }, 120)
    })
  }

  const handleGalleryMove = (direction) => {
    const container = portfolioGalleryRef.current
    if (!container) return

    const scrollAmount = Math.max(container.clientWidth * 0.75, 260)
    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    })
  }

  const handlePortfolioListMove = (direction) => {
    const container = portfolioListRef.current
    if (!container) return

    const scrollAmount = Math.max(container.clientWidth * 0.82, 300)
    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  
  useEffect(() => {
    if (!featuredPortfolio.length) return

    const interval = window.setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % featuredPortfolio.length)
    }, 3500)

    return () => window.clearInterval(interval)
  }, [featuredPortfolio])

  const rentals = [
    {
      title: "무대 렌탈",
      desc: "소형 행사부터 대형 축제까지 규모에 최적화된 무대 시스템을 설계·설치합니다.",
      points: ["간이 무대", "미니 트러스", "현장 설치 및 철거", "안전 구조 설계"],
    },
    {
      title: "음향 장비",
      desc: "야외 행사, 공연, 실내 이벤트 등 다양한 환경에서 안정적인 음향 시스템을 제공합니다.",
      points: ["스피커", "오디오 컨트롤러", "믹싱 및 오퍼레이터 지원", "현장 맞춤 세팅"],
    },
    {
      title: "조명 장비",
      desc: "행사의 분위기와 연출을 극대화하는 무대 및 특수 조명 시스템을 구성합니다.",
      points: ["페스티벌 알전구 (스트링 조명)", "무대 / 분위기 조명", "LED / 무빙라이트", "연출 디자인"],
    },
    {
      title: "영상 · LED",
      desc: "현장 송출, 홍보 영상, LED 스크린까지 영상 시스템을 통합 지원합니다.",
      points: ["LED 스크린", "빔프로젝터", "영상 송출 시스템"],
    },
    {
      title: "촬영장비 대여",
      desc: "현장 촬영부터 콘텐츠 제작까지 전문 장비와 인력을 함께 지원합니다.",
      points: ["오지모 360", "오지모 프로", "고프로", "현장 촬영", "영상 편집"],
    },
    {
      title: "행사 물품 대여",
      desc: "행사 운영에 필요한 다양한 장비와 소모품을 함께 대여합니다.",
      points: ["소화기", "배너 거치대", "윈드 배너 거치대"],
    },
  ]

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex min-w-0 items-center gap-4">
            <div className="rounded-xl bg-white p-2 shadow-sm ring-1 ring-zinc-200">
              <img
                src="/logo.png"
                alt="KIMS logo"
                className="h-12 w-auto object-contain shrink-0 brightness-0 contrast-200 sm:h-16"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>
            <div>
              <p className="text-sm font-bold tracking-tight sm:text-xl">킴스기획 KIMS entertainment</p>
              <p className="mt-1 text-[11px] leading-relaxed text-zinc-500 sm:text-xs">행사 · 축제 기획 / 운영 / 렌탈</p>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="hover:text-zinc-600">회사소개</a>
            <a href="#services" className="hover:text-zinc-600">사업영역</a>
            <a href="#portfolio" className="hover:text-zinc-600">포트폴리오</a>
            <a href="#rental" className="hover:text-zinc-600">렌탈</a>
            <a href="#contact" className="hover:text-zinc-600">문의</a>
          </nav>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border px-3 py-2 text-sm font-semibold md:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="모바일 메뉴 열기"
          >
            {mobileMenuOpen ? "닫기" : "메뉴"}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="border-t bg-white md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 text-sm font-semibold sm:px-6">
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-3 py-3 hover:bg-zinc-50">회사소개</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-3 py-3 hover:bg-zinc-50">사업영역</a>
              <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-3 py-3 hover:bg-zinc-50">포트폴리오</a>
              <a href="#rental" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-3 py-3 hover:bg-zinc-50">렌탈</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-3 py-3 hover:bg-zinc-50">문의</a>
            </div>
          </div>
        )}
      </header>

      <section className="border-b bg-zinc-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-20 md:grid-cols-[0.95fr_1.05fr] md:gap-10 md:py-24">
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-400">Event & Festival Agency</p>
            <h1 className="max-w-[7.5em] text-[2.6rem] font-black leading-[0.95] sm:max-w-none sm:text-5xl md:text-6xl">
              행사와 축제를
              <br />
              가장 현장답게 만듭니다
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-300 sm:text-base md:text-lg">
              킴스기획(KIMS entertainment)은 기획, 연출, 운영, 장비 렌탈, 영상 제작까지 전 과정을 통합적으로 수행하는 행사·축제 전문 대행사입니다.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#contact" className="rounded-2xl bg-white px-5 py-3 text-center text-sm font-semibold text-zinc-950 shadow-sm transition hover:-translate-y-0.5">
                프로젝트 문의하기
              </a>
              <a href="#portfolio" className="rounded-2xl border border-white/20 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10">
                포트폴리오 보기
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
            {featuredPortfolio.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-all duration-700 ${index === heroIndex ? "opacity-100" : "pointer-events-none opacity-0"}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
              </div>
            ))}

            <div className="relative flex min-h-[360px] flex-col justify-end p-6 sm:min-h-[420px] sm:p-8">
              <div className="max-w-md rounded-3xl bg-black/20 p-5 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-300">Featured Portfolio</p>
                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">{featuredPortfolio[heroIndex]?.title}</h2>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-white/15 px-3 py-1 font-semibold text-white">{featuredPortfolio[heroIndex]?.year}</span>
                  <span className="rounded-full bg-white/15 px-3 py-1 font-semibold text-zinc-100">{featuredPortfolio[heroIndex]?.location}</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-zinc-100">{featuredPortfolio[heroIndex]?.desc}</p>
                <button
                  type="button"
                  onClick={() => handlePortfolioSelect(featuredPortfolio[heroIndex]?.id)}
                  className="mt-5 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-zinc-950"
                >
                  대표 프로젝트 보기
                </button>
              </div>

              <button
                type="button"
                onClick={() => setHeroIndex((prev) => (prev - 1 + featuredPortfolio.length) % featuredPortfolio.length)}
                className="absolute left-3 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-lg text-white backdrop-blur-sm transition hover:bg-black/50 sm:left-5 sm:h-12 sm:w-12"
                aria-label="이전 대표 프로젝트"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={() => setHeroIndex((prev) => (prev + 1) % featuredPortfolio.length)}
                className="absolute right-3 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-lg text-white backdrop-blur-sm transition hover:bg-black/50 sm:right-5 sm:h-12 sm:w-12"
                aria-label="다음 대표 프로젝트"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">About</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">기획부터 현장 운영까지, 한 팀으로 움직입니다</h2>
            <p className="mt-6 text-base leading-8 text-zinc-600">
              킴스기획(KIMS entertainment)은 단순한 행사 진행을 넘어, 현장의 목적과 분위기를 종합적으로 설계하는 전문 기획팀입니다.
              클라이언트의 목표에 부합하는 기획안 수립부터 무대 연출, 운영 인력 구성, 장비 렌탈, 현장 콘텐츠 제작까지 전 과정을 통합적으로 제공합니다.
            </p>
            <div className="mt-8 rounded-[2rem] border bg-zinc-950 p-6 text-white shadow-xl sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-400">Core Message</p>
              <p className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                현장을 정확히 이해하는 기획이
                <br />
                행사의 완성도를 결정합니다.
              </p>
              <p className="mt-4 text-sm leading-7 text-zinc-300">
                기획, 운영, 렌탈, 콘텐츠 제작을 하나의 팀에서 유기적으로 수행하며, 일정·예산·현장 상황을 고려한 실무 중심의 솔루션을 제공합니다.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl border bg-white p-6 shadow-sm">
                <p className="text-3xl font-black text-zinc-950">Festival</p>
                <p className="mt-2 text-sm text-zinc-500">지역 축제 · 문화 행사</p>
              </div>
              <div className="rounded-3xl border bg-white p-6 shadow-sm">
                <p className="text-3xl font-black text-zinc-950">Event</p>
                <p className="mt-2 text-sm text-zinc-500">기업 행사 · 프로모션</p>
              </div>
              <div className="rounded-3xl border bg-white p-6 shadow-sm">
                <p className="text-3xl font-black text-zinc-950">Rental</p>
                <p className="mt-2 text-sm text-zinc-500">무대 · 음향 · 조명</p>
              </div>
              <div className="rounded-3xl border bg-white p-6 shadow-sm">
                <p className="text-3xl font-black text-zinc-950">Video</p>
                <p className="mt-2 text-sm text-zinc-500">스케치 · 홍보 콘텐츠</p>
              </div>
            </div>

            <div className="rounded-3xl border bg-zinc-50 p-6 shadow-sm sm:p-8">
              <p className="text-lg font-bold">진행 프로세스</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-4 ring-1 ring-zinc-100">
                  <p className="text-xs font-semibold tracking-[0.2em] text-zinc-400">01</p>
                  <p className="mt-2 font-bold">기획 및 구성</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">행사 목적, 예산, 타깃에 맞춘 실무형 기획안을 제안합니다.</p>
                </div>
                <div className="rounded-2xl bg-white p-4 ring-1 ring-zinc-100">
                  <p className="text-xs font-semibold tracking-[0.2em] text-zinc-400">02</p>
                  <p className="mt-2 font-bold">현장 설계</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">동선, 무대, 장비, 운영 인력까지 현장 중심으로 설계합니다.</p>
                </div>
                <div className="rounded-2xl bg-white p-4 ring-1 ring-zinc-100">
                  <p className="text-xs font-semibold tracking-[0.2em] text-zinc-400">03</p>
                  <p className="mt-2 font-bold">운영 및 대응</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">행사 당일 진행, 안전 관리, 돌발 상황 대응까지 안정적으로 운영합니다.</p>
                </div>
                <div className="rounded-2xl bg-white p-4 ring-1 ring-zinc-100">
                  <p className="text-xs font-semibold tracking-[0.2em] text-zinc-400">04</p>
                  <p className="mt-2 font-bold">기록 및 확장</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">스케치 영상, 사진, 홍보 콘텐츠로 행사 이후 활용도까지 높입니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-zinc-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">Services</p>
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

      <section id="portfolio" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Portfolio</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">주요 프로젝트</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600">
              킴스기획(KIMS entertainment)이 진행한 행사와 축제 운영 사례를 한눈에 볼 수 있도록 정리한 포트폴리오입니다.
            </p>
          </div>
          <a href="#contact" className="rounded-2xl border px-4 py-2 text-sm font-semibold hover:bg-zinc-50">견적 문의</a>
        </div>

        <div className="relative mt-6">
          <button
            type="button"
            onClick={() => handlePortfolioListMove("prev")}
            className="absolute left-2 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-lg text-zinc-900 shadow-md transition hover:bg-white sm:left-4 sm:h-12 sm:w-12"
            aria-label="이전 포트폴리오 보기"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={() => handlePortfolioListMove("next")}
            className="absolute right-2 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-lg text-zinc-900 shadow-md transition hover:bg-white sm:right-4 sm:h-12 sm:w-12"
            aria-label="다음 포트폴리오 보기"
          >
            ›
          </button>

          <div ref={portfolioListRef} className="flex gap-6 overflow-x-hidden px-12 pb-3 sm:px-16">
          {sortedPortfolio.map((item) => (
            <article key={item.id} className="min-w-[280px] max-w-[280px] overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:min-w-[320px] sm:max-w-[320px]">
              <div className="relative h-64 overflow-hidden bg-zinc-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full cursor-pointer object-cover"
                  onClick={() => setLightboxImage(item.image)}
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
                  onClick={() => handlePortfolioSelect(item.id)}
                  className="mt-5 rounded-2xl bg-zinc-950 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  상세보기
                </button>
              </div>
            </article>
          ))}
          </div>
        </div>

        <div ref={portfolioDetailRef} className="mt-12 rounded-[2rem] border bg-zinc-950 p-5 text-white shadow-xl transition-all duration-500 sm:p-6 md:p-8">
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

          <div className="relative mt-8">
            <button
              type="button"
              onClick={() => handleGalleryMove("prev")}
              className="absolute left-2 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-lg text-white backdrop-blur-sm transition hover:bg-black/70 sm:left-4 sm:h-12 sm:w-12"
              aria-label="이전 사진 보기"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={() => handleGalleryMove("next")}
              className="absolute right-2 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-lg text-white backdrop-blur-sm transition hover:bg-black/70 sm:right-4 sm:h-12 sm:w-12"
              aria-label="다음 사진 보기"
            >
              ›
            </button>

            <div ref={portfolioGalleryRef} className="flex gap-4 overflow-x-hidden px-12 pb-2 sm:px-16">
            {selectedPortfolio?.gallery.map((image, index) => (
              <div key={image} className="min-w-[250px] overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 sm:min-w-[320px]">
                <div className="h-56 bg-zinc-800 sm:h-64">
                  <img
                    src={image}
                    alt={`${selectedPortfolio?.title} 사진 ${index + 1}`}
                    className="h-full w-full cursor-pointer object-cover"
                    onClick={() => setLightboxImage(image)}
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
        </div>
      </section>

      <section id="rental" className="bg-zinc-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400">Rental</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">장비 렌탈 서비스</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-300">
              무대, 음향, 조명, 영상 장비를 행사 규모와 목적에 최적화하여 구성하고, 설치부터 운영까지 원스톱으로 지원합니다.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {rentals.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm transition hover:bg-white/10"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{item.desc}</p>
                <ul className="mt-4 space-y-1 text-xs text-zinc-400">
                  {item.points.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-white p-6 text-zinc-900 shadow-lg sm:p-8">
            <h3 className="text-xl font-bold">운영 지원 범위</h3>
            <div className="mt-4 grid gap-4 text-sm sm:grid-cols-3">
              <div>• 현장 설치 및 철거 전 과정 지원</div>
              <div>• 행사 규모·목적 기반 장비 구성 컨설팅</div>
              <div>• 운영 인력 및 오퍼레이터 배치</div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:01076040025"
                className="flex-1 rounded-2xl bg-zinc-950 px-5 py-3 text-center font-semibold text-white"
              >
                전화 문의
              </a>
              <a
                href="#contact"
                className="flex-1 rounded-2xl border border-zinc-300 px-5 py-3 text-center font-semibold"
              >
                빠른 견적 요청
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-8 md:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Contact</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">프로젝트 문의 메일 작성</h2>
            <p className="mt-5 text-base leading-8 text-zinc-600">
              필요한 내용을 작성하시면 문의가 전송되며, 자동 전송이 설정되지 않은 경우 이메일 작성 화면으로 연결됩니다.
            </p>
            <div className="mt-8 space-y-3 text-sm text-zinc-700">
              <p><span className="font-semibold">Tel.</span> 010-7604-0025</p>
              <p><span className="font-semibold">E-mail.</span> kimset11@naver.com</p>
              <p><span className="font-semibold">Fax.</span> 0504-376-0025</p>
              <p><span className="font-semibold">Kakao.</span> Kims-ent</p>
              <p><span className="font-semibold">사업자번호.</span> 830-06-03074</p>

            </div>
          </div>
          <form onSubmit={handleSubmit} className="rounded-3xl border bg-zinc-50 p-5 shadow-sm sm:p-6">
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
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-zinc-500 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p>© 2026 킴스기획 KIMS entertainment.</p>
            <p>사업자번호: 830-06-03074</p>
          </div>
          <p>개인정보처리방침</p>
        </div>
      </footer>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setLightboxImage(null)}
        >
          <img
            src={lightboxImage}
            alt="확대 이미지"
            className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </div>
  )
}
