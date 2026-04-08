import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"
import Icon from "@/components/ui/icon"

const audiences = [
  {
    icon: "UserCheck",
    title: "Сотрудник на испытательном сроке",
    description: "Тревожность, непонимание ожиданий, сложная адаптация — помогаем пройти период без срывов и недопониманий.",
    direction: "top",
  },
  {
    icon: "AlertTriangle",
    title: "Специалист в конфликте с руководителем",
    description: "Когда не понимаете, как говорить о проблеме — даём позицию и сценарий разговора без давления.",
    direction: "right",
  },
  {
    icon: "Battery",
    title: "Сотрудник с признаками выгорания",
    description: "Перегрузка, потеря мотивации, желание уволиться — разбираем причины и находим выход до точки невозврата.",
    direction: "left",
  },
  {
    icon: "Users",
    title: "Команда с высоким напряжением",
    description: "Скрытые конфликты, токсичная коммуникация — диагностируем атмосферу и даём конкретный план изменений.",
    direction: "bottom",
  },
  {
    icon: "Briefcase",
    title: "Руководитель, который хочет сохранить сотрудника",
    description: "Помогаем выйти в диалог, услышать друг друга и зафиксировать договорённости вместо взаимных претензий.",
    direction: "top",
  },
  {
    icon: "Building2",
    title: "Компания с высокой текучестью",
    description: "Один нерешённый конфликт может стоить сотрудника, времени, денег и репутации — подключаемся до увольнения.",
    direction: "right",
  },
]

export function AudienceSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.2)

  const getRevealClass = (direction: string, visible: boolean) => {
    if (visible) return "translate-x-0 translate-y-0 opacity-100"
    switch (direction) {
      case "left": return "-translate-x-12 opacity-0"
      case "right": return "translate-x-12 opacity-0"
      case "top": return "-translate-y-12 opacity-0"
      case "bottom": return "translate-y-12 opacity-0"
      default: return "translate-y-8 opacity-0"
    }
  }

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-12 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Для кого
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Наш клиент</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6 lg:gap-8">
          {audiences.map((item, i) => (
            <div
              key={i}
              className={`group flex gap-3 border-l border-foreground/20 pl-4 transition-all duration-700 hover:border-foreground/50 md:pl-5 ${getRevealClass(item.direction, isVisible)}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mt-0.5 shrink-0">
                <Icon name={item.icon} size={16} className="text-foreground/50 transition-colors group-hover:text-foreground/80" />
              </div>
              <div>
                <h3 className="mb-1 font-sans text-base font-light text-foreground md:text-lg">{item.title}</h3>
                <p className="text-xs leading-relaxed text-foreground/60 md:text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-8 transition-all duration-700 md:mt-10 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.(5)}>
            Записаться на консультацию
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}