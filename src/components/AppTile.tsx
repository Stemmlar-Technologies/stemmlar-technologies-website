import type { AppInfo } from '../types/App'

interface AppTileProps {
  app: AppInfo
}

export default function AppTile({ app }: AppTileProps) {
  return (
    <a href={`/applications/${app.slug}`} className="app">
      <div className="app-tile-header">
        <img src={app.icon} alt="App Icon" className="app-icon" />
        <div className="app-title">
          <h3>{app.name}</h3>
          {app.comingSoon && <p className="coming-soon">Coming soon</p>}
        </div>
      </div>
      <p className="app-tile-content">{app.description}</p>
    </a>
  )
}
