import type { CommonManufacturerLogoProps } from './manufacturers/CommonManufacturerLogoProps.js'
import { AiPhoneLogo } from './manufacturers/index.js'

export const manufacturerLogos = {
  ai_phone: AiPhoneLogo,
} as const

type ManufacturerName = keyof typeof manufacturerLogos

interface ManufacturerLogoProps
  extends Omit<CommonManufacturerLogoProps, 'wordmark'> {
  manufacturerName: ManufacturerName
}

export function ManufacturerLogo({
  manufacturerName: providerKey,
  ...rest
}: ManufacturerLogoProps) {
  const Logo = manufacturerLogos[providerKey]
  if (Logo !== undefined && Logo !== null) {
    return <Logo {...rest} />
  }
  return null
}
