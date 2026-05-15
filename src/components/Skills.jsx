import styles from './Skills.module.css'

const skills = [
  { category: 'Microsoft 365', items: ['SharePoint Online', 'Microsoft Teams', 'Exchange Online', 'OneDrive'] },
  { category: 'Power Platform', items: ['Power Automate', 'Power Apps', 'Power BI', 'Power Virtual Agents'] },
  { category: 'Azure & Admin', items: ['Azure AD / Entra ID', 'Intune', 'Microsoft Graph API', 'Conditional Access'] },
  { category: 'Dev & Scripting', items: ['PowerShell', 'PnP PowerShell', 'JSON / REST APIs', 'Git'] },
]

export default function Skills() {
  return (
    <section id="skills">
      <p className="section-num">// 003</p>
      <h2 className="section-title">Skills</h2>
      <div className={styles.grid}>
        {skills.map(({ category, items }) => (
          <div key={category} className={styles.card}>
            <h3>{category}</h3>
            <ul>
              {items.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
