import { CheckCircleIcon, CodeBracketIcon, } from '@heroicons/react/20/solid'

const timeline = [
  {
    id: 2,
    content: 'Inital data population',
    target: 'in development',
    href: '#',
    date: 'Nov 23',
    datetime: '2023-11-24',
    icon: CodeBracketIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 1,
    content: 'Intial Layout',
    target: 'complete',
    href: '#',
    date: 'Nov 8',
    datetime: '2023-11-08',
    icon: CheckCircleIcon,
    iconBackground: 'bg-green-400',
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Changelog() {
  return (
    <div className="flow-root">
      <h2>Changelog</h2>
      <div className="mt-5"></div>
      <ul role="list" className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                    )}
                  >
                    <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-500">
                      {event.content}{' '}
                      <a href={event.href} className="font-medium text-gray-900">
                        {event.target}
                      </a>
                    </p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-5"></div>
    </div>
  )
}
