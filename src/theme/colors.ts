const palette = {
  surface: '#ffffff',
  primary: '#6929C4',
  secondary: '#8A79D7',
  button: '#8676D8',
  primaryButton: 'rgba(134, 118, 216, 0.29)',
  tertiary: '#D8A8C0',
  accent: '#FFC700',
  onSurface: '#000000',
  onSurfaceSecondary: '#8391A1',
  buttonBackground: '#e2dcfe',
} as const;

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: 'rgba(0, 0, 0, 0)',
  /**
   * The default text color in many components.
   */
  text: palette.onSurface,
  /**
   * Secondary text information.
   */
  textDim: palette.onSurfaceSecondary,
  /**
   * The default color of the screen background.
   */
  background: palette.surface,
};
