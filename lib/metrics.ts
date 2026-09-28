export type Downtime = { id: string; reason: string; minutes: number }
export type ShiftRecord = {
  id: string; date: string; line: string; shift: 'Day' | 'Night'; gross: number; net: number;
  dieChanges: number; faultyDies: number; downtime: Downtime[]; notes: string; shiftMinutes: number
}

export function metrics(s: ShiftRecord) {
  const scrap = Math.max(0, s.gross - s.net)
  const downtime = s.downtime.reduce((sum, d) => sum + d.minutes, 0)
  const operatingMinutes = Math.max(0, s.shiftMinutes - downtime)
  const grossPerHour = operatingMinutes ? s.gross / (operatingMinutes / 60) : 0
  const downtimeLoss = grossPerHour * (downtime / 60)
  return {
    scrap,
    scrapRate: s.gross ? scrap / s.gross * 100 : 0,
    downtime,
    downtimeRate: s.shiftMinutes ? downtime / s.shiftMinutes * 100 : 0,
    operatingMinutes,
    grossPerHour,
    downtimeLoss,
    netPerHour: operatingMinutes ? s.net / (operatingMinutes / 60) : 0,
    dieFailureRate: s.dieChanges ? s.faultyDies / s.dieChanges * 100 : 0,
  }
}

export const fmt = (n: number, digits = 0) => new Intl.NumberFormat('en-US', { maximumFractionDigits: digits }).format(n)
export const duration = (mins: number) => `${Math.floor(mins / 60)}h ${Math.round(mins % 60)}m`
