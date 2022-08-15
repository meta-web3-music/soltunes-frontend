import {
  useDisclosure,
  Button,
  Modal,
  Text,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

interface ModalProps {
  onHandleModal: () => void;
  onHandleMintForm: (value: Object) => void;
  isVisible: boolean;
  isMinting: boolean;
}

const MintModal: React.FC<ModalProps> = ({
  onHandleModal,
  onHandleMintForm,
  isVisible,
  isMinting,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Mint</Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader as="h4" textAlign="center">
            Mint Song NFT
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel> Upload Song</FormLabel>
              <Input type="file" />
              <FormLabel mt="1"> Song Name</FormLabel>
              <Input type="text" />

              <FormLabel mt="1"> Artist Name</FormLabel>
              <Input type="text" />

              <FormLabel mt="1"> Ad space price</FormLabel>
              <FormHelperText mb="1">All prices are in SOL</FormHelperText>
              <Input type="text" />
              <Button
                size="md"
                mt="5"
                colorScheme="purple"
                borderRadius="full"
                width="full"
              >
                Mint Song NFT
              </Button>
              <FormHelperText textAlign="center">
                Chargest not included
              </FormHelperText>
            </FormControl>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MintModal;
