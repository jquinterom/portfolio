import { useLocale } from "next-intl";
import { useRouter } from "next/navigation"
import { useEffect, useState, useTransition } from "react"

const LocalSwitcher = () => {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const localActive = useLocale()
  const [locale, setLocale] = useState<string | undefined>()

  useEffect(() => {
    setLocale(localActive)
  }, [localActive])

  const handleSetLanguage = () => {
    const currentLang = localActive

    const newLang = currentLang === "en" ? "es" : "en";
    setLocale(newLang);

    startTransition(() => {
      router.push(`/${newLang}`);
    });
  }

  return (
    <button
      onClick={handleSetLanguage}
      disabled={isPending}
    >
      <span className={`transition-colors hover:text-gray-600 dark:text-white dark:hover:text-gray-500 ${isPending ? 'cursor-not-allowed' : ''}`}>
        {locale?.toUpperCase()}
      </span>
    </button>
  )
}

export default LocalSwitcher