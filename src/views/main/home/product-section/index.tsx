import FeatureCard from './feature-card'
import StatementCard from './statement-card'
// import { AccountingSoftwareIcon, ComputerIcon, EncryptionIcon, WorkflowsIcon } from '../icons'
import * as S from './styles'
import * as I from '../icons'
import { RefObject } from 'react'
import { ChevronDoubleLeftIcon, ClockIcon, EyeIcon, GlobeAltIcon, GlobeIcon, LockClosedIcon } from '@heroicons/react/outline'

type TProductSectionProps = {
  id?: string
  inner_ref?: RefObject<HTMLDivElement>
}

const ProductSection = ({ id, inner_ref }: TProductSectionProps) => {
  return (
    <>
      <S.SectionContainer id={id} ref={inner_ref}>
        <S.Subtitle>Perfect on their own, natively integrated together.</S.Subtitle>
        <S.Title>Explore Modernbanc by product:</S.Title>
        <S.CardContainer>
          <FeatureCard
            icon={<I.AccountingSoftwareIcon />}
            title="Accounting software"
            description="Store all your accounts, transactions and other financial activity."
            list_items={['Create accounts, transactions.', 'Reconstruct history.', 'Reconcile with external systems.']}
            badge_number={1}
          />
          <FeatureCard
            icon={<I.WorkflowsIcon />}
            title="Workflows"
            description="Initiate payments and manage all your accounting and financial data flows."
            list_items={['Connect anything.', 'Initiate payments.', 'Build financial data integrations.']}
            badge_number={2}
          />
          <FeatureCard
            icon={<I.EncryptionIcon />}
            title="Encryption"
            description="Store sensitive customer, card or account data to power your payments."
            list_items={['Encrypt anything.', 'Collect and show via SDK.', 'Manage access per token.']}
            badge_number={3}
          />
        </S.CardContainer>

        <S.SectionCommentContainer>
          <S.SectionIconContainer>
            <I.ComputerIcon />
          </S.SectionIconContainer>
          <S.SectionComment>&#8202;Built on top of world-class foundation&#8202;</S.SectionComment>
        </S.SectionCommentContainer>

        <S.CardContainerComment style={{ marginBottom: '25px' }}>
          <StatementCard
            icon={<I.DoubleChevronNorthEastIcon />}
            title="Real-time sync engine"
            description="See instant updates on your all your accounting, payments and financial data."
          />
          <StatementCard
            icon={<EyeIcon width={16} />}
            title="Single source of truth"
            description="Store all your data across all payments and financial providers in one place."
          />
          <StatementCard
            icon={<LockClosedIcon width={16} />}
            title="Granular access"
            description="Control every aspect of accessing or modifying any part of your data. "
          />
          <StatementCard
            icon={<ChevronDoubleLeftIcon width={16} />}
            title="Version Control"
            description="Version and roll-out your logic in the workspace. Revert and experiment."
          />
          <StatementCard
            icon={<ClockIcon width={16} />}
            title="History reconstruction"
            description="See transaction or an account as they were at any point of time."
          />
          <StatementCard
            icon={<GlobeIcon width={16} />}
            title="Environments"
            description="Work and test your financial logic in test environment before rolling out to production."
          />
        </S.CardContainerComment>
      </S.SectionContainer>
    </>
  )
}

export default ProductSection
