import { AiPhoneLogo } from './manufacturers/AiPhoneLogo.js'
import { AkilesLogo } from './manufacturers/AkilesLogo.js'
import { AkuvoxLogo } from './manufacturers/AkuvoxLogo.js'
import { AlarmLogo } from './manufacturers/AlarmLogo.js'
import { AlfredLogo } from './manufacturers/AlfredLogo.js'
import { AllegionLogo } from './manufacturers/AllegionLogo.js'
import { AmagLogo } from './manufacturers/AmagLogo.js'
import { AmericanStandardLogo } from './manufacturers/AmericanStandardLogo.js'
import { AprilAireLogo } from './manufacturers/AprilAireLogo.js'
import { AqaraLogo } from './manufacturers/AqaraLogo.js'
import { AssaLogo } from './manufacturers/AssaLogo.js'
import { AugustLogo } from './manufacturers/AugustLogo.js'
import { AvigilonLogo } from './manufacturers/AvigilonLogo.js'
import type { CommonManufacturerLogoProps } from './manufacturers/CommonManufacturerLogoProps.js'

/**
 * A dictionary of manufacturer names to their respective logos.
 */
export const manufacturerLogos = {
  ai_phone: AiPhoneLogo,
  akiles: AkilesLogo,
  akuvox: AkuvoxLogo,
  alarm: AlarmLogo,
  alfred: AlfredLogo,
  allegion: AllegionLogo,
  amag: AmagLogo,
  american_standard: AmericanStandardLogo,
  aprilaire: AprilAireLogo,
  aqara: AqaraLogo,
  assa_abloy_credential_service: null,
  assa: AssaLogo,
  august: AugustLogo,
  avigilon_alta: AvigilonLogo,
} as const

type ManufacturerName = keyof typeof manufacturerLogos

interface ManufacturerLogoProps extends CommonManufacturerLogoProps {
  /**
   * The name of the manufacturer.
   */
  manufacturerName: ManufacturerName
}

/**
 * Show a logo for a particular manufacturer.
 */
export function ManufacturerLogo({
  manufacturerName: providerKey,
  ...rest
}: ManufacturerLogoProps) {
  const Logo = manufacturerLogos[providerKey]
  if (Logo != null) {
    return <Logo {...rest} />
  }
  return null
}
