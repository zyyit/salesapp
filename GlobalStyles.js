import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

export const WebViewStyles = theme =>
  StyleSheet.create({
    'HTML View': { flex: 1 },
    'HTML View 2': { flex: 1 },
    'Web View': { flex: 1 },
  });

export const VideoPlayerStyles = theme =>
  StyleSheet.create({ Video: { height: 215 } });

export const TextStyles = theme =>
  StyleSheet.create({
    Text: { color: theme.colors.strong },
    'Text 2': { color: theme.colors.strong },
    tittleText: { color: theme.colors.strong, fontSize: 15 },
  });

export const CircleStyles = theme =>
  StyleSheet.create({
    Circle: {
      alignItems: 'center',
      backgroundColor: theme.colors.primary,
      justifyContent: 'center',
    },
  });

export const ImageStyles = theme =>
  StyleSheet.create({ Image: { height: 100, width: 100 } });

export const SVGStyles = theme =>
  StyleSheet.create({ SVG: { height: 100, width: 100 } });

export const ViewStyles = theme =>
  StyleSheet.create({
    tittleView: { alignItems: 'center', height: 45, justifyContent: 'center' },
  });

export const HStackStyles = theme =>
  StyleSheet.create({
    'H Stack': { alignItems: 'center', flexDirection: 'row' },
  });

export const ZStackStyles = theme =>
  StyleSheet.create({ 'Z Stack': { flexDirection: 'row' } });

export const VStackStyles = theme =>
  StyleSheet.create({ 'V Stack': { flexDirection: 'column' } });

export const DividerStyles = theme =>
  StyleSheet.create({ Divider: { height: 1 } });

export const MapViewStyles = theme =>
  StyleSheet.create({
    'Map View': { flex: 1, height: '100%', width: '100%' },
    'Map View 2': { flex: 1, height: '100%', width: '100%' },
  });

export const ScreenContainerStyles = theme => StyleSheet.create({});

export const ButtonStyles = theme =>
  StyleSheet.create({
    Button: {
      backgroundColor: theme.colors.primary,
      fontFamily: 'System',
      fontWeight: '700',
      textAlign: 'center',
    },
  });

export const TableStyles = theme => StyleSheet.create({ Table: { flex: 1 } });

export const TableCellStyles = theme =>
  StyleSheet.create({ 'Table Cell': { flex: 1, flexDirection: 'row' } });

export const FetchStyles = theme =>
  StyleSheet.create({ Fetch: { minHeight: 40 } });

export const H1Styles = theme =>
  StyleSheet.create({
    H1: { color: theme.colors.strong, fontSize: 32, fontWeight: 'bold' },
  });

export const SurfaceStyles = theme =>
  StyleSheet.create({ Surface: { minHeight: 40 } });

export const AccordionGroupStyles = theme =>
  StyleSheet.create({
    Accordion: {
      fontSize: 16,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
  });

export const ActivityIndicatorStyles = theme =>
  StyleSheet.create({ 'Activity Indicator': { height: 36, width: 36 } });

export const DeckSwiperStyles = theme =>
  StyleSheet.create({ 'Deck Swiper': { position: 'absolute' } });

export const DeckSwiperCardStyles = theme =>
  StyleSheet.create({
    'Deck Swiper Card': {
      alignItems: 'center',
      borderWidth: 2,
      justifyContent: 'center',
      padding: 20,
    },
  });

export const SwipeableItemStyles = theme =>
  StyleSheet.create({ 'Swipeable Item': { overflow: 'hidden' } });

export const SwiperStyles = theme =>
  StyleSheet.create({
    Swiper: { height: 300, width: '100%' },
    'Swiper 2': { height: 300, width: '100%' },
  });

export const PinInputStyles = theme =>
  StyleSheet.create({
    'Pin Input': {
      alignItems: 'center',
      borderColor: theme.colors.medium,
      borderRadius: 5,
      borderWidth: 1,
      color: theme.colors.strong,
      flex: 1,
      fontSize: 25,
      justifyContent: 'center',
      marginLeft: 5,
      marginRight: 5,
      maxHeight: 70,
      maxWidth: 70,
      padding: 5,
    },
  });

export const TabViewItemStyles = theme =>
  StyleSheet.create({ 'Tab View Item': { flex: 1 } });

export const LinkStyles = theme =>
  StyleSheet.create({ Link: { color: theme.colors.primary } });

export const PressableStyles = theme =>
  StyleSheet.create({
    'Button 2': { borderColor: theme.colors['Medium'], height: 25, width: 40 },
  });

export const BlurViewStyles = theme =>
  StyleSheet.create({
    'Blur View': { flexBasis: 0, flexGrow: 1, flexShrink: 1 },
  });
