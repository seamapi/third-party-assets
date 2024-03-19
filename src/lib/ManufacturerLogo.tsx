import type { CommonManufacturerLogoProps } from './manufacturers/CommonManufacturerLogoProps.js'
import { AiPhoneLogo } from './manufacturers/AiPhoneLogo.js'

/**
 * A dictionary of manufacturer names to their respective logos.
 */
export const manufacturerLogos = {
  ai_phone: AiPhoneLogo,
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
