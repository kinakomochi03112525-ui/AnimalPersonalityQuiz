import { useEffect, useState } from 'react'
import { animals, questions, scoreQuiz, type Animal } from './data/quiz'
import './App.css'

type Screen = 'home' | 'quiz' | 'result'

const BRAND = 'ゆるどうぶつ診断'
const TAGLINE = 'こころのすみか、どのどうぶつ？'

export default function App() {
  const [screen, setScreen] = useState<Screen>('home')
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [result, setResult] = useState<Animal | null>(null)
  const [copied, setCopied] = useState(false)
  const [enterAnim, setEnterAnim] = useState(true)

  useEffect(() => {
    setEnterAnim(false)
    const id = requestAnimationFrame(() => setEnterAnim(true))
    return () => cancelAnimationFrame(id)
  }, [screen, step])

  function startQuiz() {
    setAnswers([])
    setStep(0)
    setResult(null)
    setCopied(false)
    setScreen('quiz')
  }

  function pickOption(optionIndex: number) {
    const nextAnswers = [...answers.slice(0, step), optionIndex]
    setAnswers(nextAnswers)

    if (step + 1 >= questions.length) {
      setResult(scoreQuiz(nextAnswers))
      setScreen('result')
      return
    }
    setStep(step + 1)
  }

  async function copyResult() {
    if (!result) return
    const text = `${result.shareLine}\n#${BRAND}`
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      // Fallback for older browsers
      const area = document.createElement('textarea')
      area.value = text
      document.body.appendChild(area)
      area.select()
      document.execCommand('copy')
      document.body.removeChild(area)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    }
  }

  return (
    <div className="app">
      <div className="bg" aria-hidden="true">
        <span className="blob blob-a" />
        <span className="blob blob-b" />
        <span className="blob blob-c" />
        <span className="wave" />
      </div>

      <main className="shell">
        {screen === 'home' && (
          <section className={`panel home ${enterAnim ? 'enter' : ''}`}>
            <p className="brand">{BRAND}</p>
            <h1 className="headline">{TAGLINE}</h1>
            <p className="lede">
              ゆるっと答えるだけで、あなたにぴったりのどうぶつがわかるよ。
            </p>
            <button type="button" className="cta" onClick={startQuiz}>
              はじめる
            </button>
            <p className="meta">全{questions.length}問・約1分</p>
          </section>
        )}

        {screen === 'quiz' && (
          <section className={`panel quiz ${enterAnim ? 'enter' : ''}`}>
            <header className="quiz-top">
              <p className="brand-mini">{BRAND}</p>
              <div className="progress" aria-label="進捗">
                <div
                  className="progress-fill"
                  style={{
                    width: `${((step + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>
              <p className="progress-label">
                {step + 1} / {questions.length}
              </p>
            </header>

            <h2 className="question">{questions[step].text}</h2>

            <div className="options" role="group" aria-label="選択肢">
              {questions[step].options.map((option, index) => (
                <button
                  key={option.label}
                  type="button"
                  className="option"
                  onClick={() => pickOption(index)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </section>
        )}

        {screen === 'result' && result && (
          <section
            className={`panel result ${enterAnim ? 'enter' : ''}`}
            style={{ ['--accent' as string]: result.accent }}
          >
            <p className="brand-mini">{BRAND}</p>
            <p className="result-kicker">あなたは…</p>
            <div className="result-hero">
              <span className="result-emoji" aria-hidden="true">
                {result.emoji}
              </span>
              <h2 className="result-name">{result.name}</h2>
              <p className="result-tag">{result.tagline}</p>
            </div>
            <p className="result-desc">{result.description}</p>
            <ul className="traits">
              {result.traits.map((trait) => (
                <li key={trait}>{trait}</li>
              ))}
            </ul>
            <p className="share-box">{result.shareLine}</p>
            <div className="actions">
              <button type="button" className="cta secondary" onClick={copyResult}>
                {copied ? 'コピーしたよ！' : '結果をコピー'}
              </button>
              <button type="button" className="cta" onClick={startQuiz}>
                もう一度
              </button>
            </div>
            <p className="others">
              ほかのどうぶつもいるよ：
              {Object.values(animals)
                .filter((a) => a.id !== result.id)
                .map((a) => a.name)
                .join('・')}
            </p>
          </section>
        )}
      </main>
    </div>
  )
}
