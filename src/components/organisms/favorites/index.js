import { Heading, ScrollView } from 'native-base';
import { useSelector } from 'react-redux';
import Recipe from '_molecules/recipe/recipe';

const Favorites = ({ navigation }) => {
  const { recipes } = useSelector((state) => state.recipes);

  return (
    <ScrollView>
      <Heading
        size="md"
        mt="8"
        mb="4"
        bg="white"
        py="4"
        shadow="1"
        borderBottomColor="gray.400"
        px="4"
      >
        Mis Favoritos
      </Heading>
      {recipes
        .filter((recip) => recip.isFavorite)
        .map((recip, index) => (
          <Recipe
            navigation={navigation}
            key={index * 3}
            name={recip.name}
            category={recip.category}
            img={recip.img}
            id={recip._id}
            isFavorite={recip.isFavorite}
          />
        ))}
    </ScrollView>
  );
};

export default Favorites;
