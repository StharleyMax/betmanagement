import { SportsEntityFake } from '../entityFake/Sports.entityFake';

export const mockSports = (): SportsEntityFake[] => {
  return [
    {
      id: 1,
      name: 'sports name',
      category: 'sports category',
      actived: true,
      create_at: new Date(),
      update_at: new Date(),
    },
  ];
};
