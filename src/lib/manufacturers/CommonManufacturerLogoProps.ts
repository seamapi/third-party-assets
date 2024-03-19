export interface CommonManufacturerLogoProps
  extends Omit<React.SVGProps<SVGSVGElement>, 'children'> {
  /**
   * Whether to use the monochrome version of the logo
   */
  monochrome?: boolean
}
