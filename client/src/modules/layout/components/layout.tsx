import { View } from 'react-native';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  return <View className="flex flex-1 flex-col p-4 bg-gray-200">{children}</View>;
};

export default Layout;
