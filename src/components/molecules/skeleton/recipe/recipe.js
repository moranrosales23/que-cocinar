import { Flex, Skeleton } from 'native-base';

const RecipeSkeleton = () => {
  return (
    <Flex px="2" py="2" marginTop="3" borderRadius="10" ml="2" mr="2">
      <Skeleton startColor="gray.200" h="4" mb="2" />
      <Skeleton width="100%" h="150" rounded="md" startColor="gray.300" mb="2" />
      <Skeleton startColor="gray.200" h="4" />
    </Flex>
  );
};

export default RecipeSkeleton;
