import { ItemsService } from './items.service';
import { Test } from '@nestjs/testing';
import { ItemRepository } from './item.repository';
import { UserStatus } from '../auth/user-status.enum';
import { ItemStatus } from './item-status.enum';
import { NotFoundException } from '@nestjs/common';

// モックとは，テスト対象のクラスや関数が依存しているクラスや関数を模擬すること．
const mockItemsService = () => ({
  find: jest.fn(),
  findOne: jest.fn(),
});

const mockUser1 = {
  id: '1',
  username: 'test2',
  password: '1234',
  status: UserStatus.PREMIUM,
};

const mockUser2 = {
  id: '2',
  username: 'test2',
  password: '1234',
  status: UserStatus.FREE,
};

// describe は，テストをグループ化するための関数．
describe('ItemsServiceTest', () => {
  let itemsService;
  let itemRepository;

  // 全てのテストの前に実行される
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ItemsService,
        {
          provide: ItemRepository,
          useFactory: mockItemsService,
        },
      ],
    }).compile();

    itemsService = await module.get<ItemsService>(ItemsService);
    itemRepository = await module.get<ItemRepository>(ItemRepository);
  });

  describe('findAll', () => {
    it('正常系', async () => {
      const expected = [];
      itemRepository.find.mockResolvedValue(expected);
      const result = await itemsService.findAll();

      expect(result).toEqual(expected);
    });
  });

  describe('findById', () => {
    it('正常系', async () => {
      const expected = {
        id: 'test-id',
        name: 'PC',
        price: 5000,
        description: '',
        status: ItemStatus.ON_SALE,
        createdAt: '',
        updatetedAt: '',
        userId: mockUser1.id,
        user: mockUser1,
      };

      itemRepository.findOne.mockResolvedValue(expected);
      const result = await itemsService.findById('test-id');
      expect(result).toEqual(expected);
    });

    it('異常系: 商品が存在しない', async () => {
      itemRepository.findOne.mockResolvedValue(null);
      await expect(itemsService.findById('test-id')).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
