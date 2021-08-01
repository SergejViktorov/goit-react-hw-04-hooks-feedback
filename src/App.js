import { useState } from 'react'

import Section from './Components/Section'
import FeedbackOptions from './Components/FeedbackOptions'
import Statistics from './Components/Statistics'
import { FEEDBACK_OPTIONS } from './data/options'

export default function App() {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const leaveFeedback = ({ target }) => {
		const { feedback } = target.dataset

		switch (feedback) {
			case 'good':
				setGood((prevGood) => prevGood + 1)
				break
			case 'neutral':
				setNeutral((prevNeutral) => prevNeutral + 1)
				break
			case 'bad':
				setBad((prevBad) => prevBad + 1)
				break
			default:
		}
	}

	const countTotalFeedback = () => {
		return good + neutral + bad
	}

	const total = countTotalFeedback()

	const countPositive = () => {
		return Math.trunc((good / total) * 100) || 0
	}

	return (
		<div>
			<Section title="Please leave feedback">
				<FeedbackOptions
					options={FEEDBACK_OPTIONS}
					onLeaveFeedback={leaveFeedback}
				/>
			</Section>

			<Section title="Statistics">
				<Statistics
					good={good}
					neutral={neutral}
					bad={bad}
					total={total}
					positivePercentage={countPositive()}
				/>
			</Section>
		</div>
	)
}
